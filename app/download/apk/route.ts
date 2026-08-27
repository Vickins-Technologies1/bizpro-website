import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  return NextResponse.redirect(siteConfig.playStoreUrl, 308);
}
