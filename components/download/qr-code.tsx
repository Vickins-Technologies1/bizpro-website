import QRCode from "qrcode";

export async function QRCodeCard({ value }: { value: string }) {
  const svg = await QRCode.toString(value, {
    type: "svg",
    width: 240,
    margin: 1,
    errorCorrectionLevel: "M",
    color: {
      dark: "#0b1220",
      light: "#ffffff"
    }
  });

  return (
    <figure className="rounded-3xl border border-border/70 bg-white p-4 shadow-panel dark:bg-card">
      <div className="mx-auto max-w-[15rem]" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />
      <figcaption className="mt-4 text-center text-sm text-muted">Scan to open BizPro on Google Play.</figcaption>
    </figure>
  );
}
