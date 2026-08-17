import { readFile } from "fs/promises";
import { join } from "path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const apkPath = join(process.cwd(), "public", "downloads", "bizpro.apk");

export async function GET() {
  try {
    const apk = await readFile(apkPath);

    return new Response(apk, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": 'attachment; filename="bizpro.apk"',
        "Content-Length": String(apk.length),
        "Cache-Control": "no-store, max-age=0"
      }
    });
  } catch {
    return new NextResponse("BizPro APK is not available yet.", {
      status: 404,
      headers: {
        "Cache-Control": "no-store",
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
}
