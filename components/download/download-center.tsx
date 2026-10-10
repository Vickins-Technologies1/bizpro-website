"use client";

import {
  Apple,
  Check,
  ChevronDown,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  Globe2,
  Monitor,
  PackageCheck,
  ShieldCheck,
  Smartphone,
  Terminal,
  TriangleAlert,
  type LucideIcon
} from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";
import { downloadPlatforms, isVerifiedArtifact, latestRelease, type DownloadArtifact, type PlatformId } from "@/config/releases";
import { cn } from "@/lib/utils";

const platformIcons: Record<PlatformId, LucideIcon> = {
  windows: Monitor,
  macos: Apple,
  linux: Terminal,
  android: Smartphone,
  ios: Smartphone,
  web: Globe2
};

const faqs = [
  [
    "Which operating systems does Dira OS support?",
    "The only verified native download currently published is Android. Windows, macOS, Linux and Kali Linux, iOS/iPadOS, and a production web-app URL are not published in this release center."
  ],
  [
    "How do I choose the correct download?",
    "Use the platform recommendation when it matches your device, then review the requirements and format before downloading. Google Play is the recommended Android path; the direct APK is for compatible Android devices where direct installation is appropriate."
  ],
  [
    "What is the difference between Apple Silicon and Intel?",
    "Apple Silicon means Apple M-series processors; Intel refers to older Intel-based Macs. A native macOS build is not published yet, so there is no macOS architecture choice to make today."
  ],
  [
    "Can I install Dira OS on Kali Linux?",
    "Kali Linux compatibility has not been verified. No official Linux package or archive is published, so the download center does not claim support for Kali or any other Linux distribution."
  ],
  [
    "Is Dira OS available on Android and iOS?",
    "Yes on Android: the official Google Play listing and a direct APK are available. No official Apple App Store listing or generally installable iOS/iPadOS package is configured."
  ],
  [
    "How do I update Dira OS?",
    "Google Play manages updates for the store installation. If you installed the direct APK, download the latest APK from this official page and install it over the existing app when Android permits it."
  ],
  [
    "How can I verify the integrity of a downloaded installer?",
    "For the APK, compare its SHA-256 value with the checksum published on this page. On Windows PowerShell use Get-FileHash .\\bizpro.apk -Algorithm SHA256; on macOS or Linux use shasum -a 256 bizpro.apk or sha256sum bizpro.apk."
  ],
  [
    "What should I do if installation fails?",
    "Try Google Play first, confirm the device meets the published Android requirement, and make sure the download completed. Do not disable device protections globally. If the issue remains, contact support with the device model and the exact error."
  ],
  [
    "Can I use Dira OS without installing a desktop application?",
    "There is no verified production web-app URL configured in this project. The public Dira OS website is a marketing site, not a published sign-in destination, so no browser-app action is shown."
  ]
] as const;

function detectPlatform(): PlatformId | null {
  if (typeof navigator === "undefined") return null;

  const userAgent = navigator.userAgent.toLowerCase();
  const isTouchMac = /macintosh/.test(userAgent) && navigator.maxTouchPoints > 1;

  if (/android/.test(userAgent)) return "android";
  if (/iphone|ipad|ipod/.test(userAgent) || isTouchMac) return "ios";
  if (/windows/.test(userAgent)) return "windows";
  if (/macintosh|mac os x/.test(userAgent)) return "macos";
  if (/linux/.test(userAgent)) return "linux";
  return null;
}

function platformStatusClass(status: "available" | "coming-soon" | "not-published") {
  if (status === "available") return "border-[var(--download-accent)]/25 bg-[var(--download-accent-soft)] text-[var(--download-accent-text)]";
  if (status === "coming-soon") return "border-[var(--download-blue)]/25 bg-[var(--download-blue-soft)] text-[var(--download-blue)]";
  return "border-[var(--download-border)] bg-[var(--download-soft-strong)] text-[var(--download-body)]";
}

function CopyChecksum({ checksum }: { checksum: string }) {
  const [copied, setCopied] = useState(false);

  async function copyChecksum() {
    try {
      await navigator.clipboard.writeText(checksum);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-4 rounded-xl border border-[var(--download-border)] bg-[var(--download-bg)] p-3">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--download-muted)]">SHA-256 checksum</p>
        <button
          type="button"
          onClick={copyChecksum}
          className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-[11px] font-semibold text-[var(--download-blue)] transition hover:bg-[var(--download-soft-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]"
          aria-label="Copy SHA-256 checksum"
        >
          {copied ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Copy className="h-3.5 w-3.5" aria-hidden="true" />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
      <code className="mt-2 block break-all font-mono text-[10px] leading-5 text-[var(--download-heading)]">{checksum}</code>
    </div>
  );
}

function MetadataItem({ label, value }: { label: string; value?: string }) {
  if (!value) return null;

  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.15em] text-[var(--download-muted)]">{label}</dt>
      <dd className="mt-1 text-xs font-semibold text-[var(--download-heading)]">{value}</dd>
    </div>
  );
}

function ArtifactCard({ artifact }: { artifact: DownloadArtifact }) {
  const Icon = artifact.external ? ExternalLink : Download;
  const verified = isVerifiedArtifact(artifact);
  const actionLabel = artifact.id === "android-play" ? "Get it on Google Play" : artifact.id === "android-apk" ? "Download APK" : artifact.label;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[var(--download-border)] bg-[var(--download-card)] p-5 shadow-[var(--download-card-shadow)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--download-border-strong)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--download-blue)]">{artifact.format}</p>
          <h3 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-[var(--download-heading)]">{artifact.label}</h3>
        </div>
        {artifact.verified ? (
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-[var(--download-accent)]/25 bg-[var(--download-accent-soft)] px-2.5 py-1 text-[10px] font-semibold text-[var(--download-accent-text)]">
            <ShieldCheck className="h-3 w-3" aria-hidden="true" /> Verified
          </span>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--download-body)]">{artifact.description}</p>

      <dl className="mt-5 grid gap-4 border-t border-[var(--download-border)] pt-4 sm:grid-cols-2">
        <MetadataItem label="Version" value={artifact.version} />
        <MetadataItem label="Size" value={artifact.size ?? (artifact.format === "Store listing" ? "Store managed" : undefined)} />
        <MetadataItem label="Release date" value={artifact.releaseDate} />
        <MetadataItem label="Minimum requirement" value={artifact.minimumRequirements} />
      </dl>

      {artifact.checksum ? <CopyChecksum checksum={artifact.checksum} /> : null}

      <div className="mt-auto pt-5">
        {verified ? (
          <a
            href={artifact.href}
            target={artifact.external ? "_blank" : undefined}
            rel={artifact.external ? "noreferrer" : undefined}
            download={!artifact.external ? true : undefined}
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[var(--download-primary)] px-4 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(47,126,255,0.24)] transition hover:-translate-y-0.5 hover:bg-[var(--download-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--download-card-solid)]"
          >
            {actionLabel}
            <Icon className="h-4 w-4" aria-hidden="true" />
          </a>
        ) : (
          <span className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[var(--download-border)] bg-[var(--download-soft)] px-4 py-3 text-sm font-semibold text-[var(--download-muted)]">
            Download unavailable
          </span>
        )}
      </div>

      {artifact.signing ? <p className="mt-3 text-[11px] leading-5 text-[var(--download-muted)]">{artifact.signing}</p> : null}
    </article>
  );
}

function AndroidInstallationGuide() {
  return (
    <details className="group rounded-2xl border border-[var(--download-border)] bg-[var(--download-surface-deep)]/80" open>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-sm font-semibold text-[var(--download-heading)] [&::-webkit-details-marker]:hidden">
        <span className="flex items-center gap-2.5"><PackageCheck className="h-4 w-4 text-[var(--download-accent)]" aria-hidden="true" /> Android installation guide</span>
        <ChevronDown className="h-4 w-4 text-[var(--download-muted)] transition group-open:rotate-180" aria-hidden="true" />
      </summary>
      <div className="grid gap-6 border-t border-[var(--download-border)] px-5 py-5 lg:grid-cols-[1fr_0.85fr]">
        <ol className="grid gap-4 text-sm leading-6 text-[var(--download-body)]">
          <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--download-primary-soft)] text-xs font-bold text-[var(--download-blue)]">1</span><span><strong className="text-[var(--download-heading)]">Prefer Google Play.</strong> Open the store listing above, review the publisher, and choose Install. Play handles updates through the normal Android flow.</span></li>
          <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--download-primary-soft)] text-xs font-bold text-[var(--download-blue)]">2</span><span><strong className="text-[var(--download-heading)]">For the APK, use only this page.</strong> Download the official HTTPS file, compare its checksum, and open it from your device&apos;s Downloads folder.</span></li>
          <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--download-primary-soft)] text-xs font-bold text-[var(--download-blue)]">3</span><span><strong className="text-[var(--download-heading)]">Handle the prompt carefully.</strong> If Android asks for permission, allow installs for the browser or file manager you used only as needed; do not disable device protections globally.</span></li>
          <li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--download-primary-soft)] text-xs font-bold text-[var(--download-blue)]">4</span><span><strong className="text-[var(--download-heading)]">Open and update.</strong> Launch Dira OS, sign in, and use this page for the next official release when you need to update a direct APK installation.</span></li>
        </ol>
        <aside className="rounded-xl border border-[var(--download-warning)]/25 bg-[var(--download-warning-soft)] p-4 text-sm leading-6 text-[var(--download-warning)]">
          <div className="flex items-center gap-2 font-semibold text-[var(--download-warning)]"><TriangleAlert className="h-4 w-4" aria-hidden="true" /> Direct APK safety note</div>
          <p className="mt-2">Sideloading bypasses the convenience of Google Play. Verify the SHA-256 value shown above and keep Android security protections enabled.</p>
        </aside>
      </div>
    </details>
  );
}

export function DownloadCenter() {
  const [detectedPlatform, setDetectedPlatform] = useState<PlatformId | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformId>("android");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selected = useMemo(() => downloadPlatforms.find((platform) => platform.id === selectedPlatform) ?? downloadPlatforms[0], [selectedPlatform]);
  const SelectedIcon = platformIcons[selected.id];

  useEffect(() => {
    const platform = detectPlatform();
    setDetectedPlatform(platform);
    if (platform) setSelectedPlatform(platform);
  }, []);

  function selectPlatform(id: PlatformId) {
    setSelectedPlatform(id);
    window.requestAnimationFrame(() => document.getElementById("platform-downloads")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  function handleTabKeyDown(event: ReactKeyboardEvent<HTMLButtonElement>, index: number) {
    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? -1 : 0;
    if (event.key === "Home") {
      event.preventDefault();
      tabRefs.current[0]?.focus();
      selectPlatform(downloadPlatforms[0].id);
      return;
    }
    if (event.key === "End") {
      event.preventDefault();
      tabRefs.current[downloadPlatforms.length - 1]?.focus();
      selectPlatform(downloadPlatforms[downloadPlatforms.length - 1].id);
      return;
    }
    if (!direction) return;
    event.preventDefault();
    const nextIndex = (index + direction + downloadPlatforms.length) % downloadPlatforms.length;
    tabRefs.current[nextIndex]?.focus();
    selectPlatform(downloadPlatforms[nextIndex].id);
  }

  return (
    <div className="download-center overflow-hidden bg-[var(--download-bg)] text-[var(--download-heading)]">
      <section className="relative isolate border-b border-[var(--download-border)] bg-[var(--download-bg)] py-16 sm:py-20 lg:py-28">
        <div className="download-glow pointer-events-none absolute inset-0 -z-10" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-[var(--download-blue)]/50 to-transparent" />
        <div className="mx-auto grid w-full max-w-[77rem] gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--download-blue-border)] bg-[var(--download-blue-soft)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--download-blue)]"><Download className="h-3.5 w-3.5" aria-hidden="true" /> Official download center</div>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.07em] text-[var(--download-heading)] sm:text-6xl lg:text-7xl">Your business.<br /><span className="bg-gradient-to-r from-[var(--download-heading)] via-[var(--download-blue)] to-[var(--download-accent)] bg-clip-text text-transparent">Every device.</span></h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--download-body)] sm:text-lg">Take Dira OS wherever business happens. Download the application for your preferred platform and manage your business with greater flexibility.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#platform-downloads" className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[var(--download-primary)] px-5 py-3 text-sm font-bold text-white shadow-[0_14px_35px_rgba(47,126,255,0.25)] transition hover:-translate-y-0.5 hover:bg-[var(--download-primary-hover)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]">Explore downloads <ChevronRight className="h-4 w-4" aria-hidden="true" /></a>
              <a href="#release" className="inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--download-border)] bg-[var(--download-soft)] px-5 py-3 text-sm font-semibold text-[var(--download-heading)] transition hover:border-[var(--download-border-strong)] hover:bg-[var(--download-soft-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]">View release details</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5 text-[11px] font-semibold text-[var(--download-muted)]">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--download-border)] bg-[var(--download-soft)] px-3 py-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[var(--download-accent)]" aria-hidden="true" /> HTTPS delivery</span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--download-border)] bg-[var(--download-soft)] px-3 py-1.5"><Check className="h-3.5 w-3.5 text-[var(--download-accent)]" aria-hidden="true" /> Checksum published</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[31rem]">
            <div className="absolute -inset-6 rounded-[2rem] bg-[var(--download-primary-soft)] blur-3xl" />
            <div className="relative rounded-[1.6rem] border border-[var(--download-border)] bg-[var(--download-card)] p-5 shadow-[var(--download-shadow)] backdrop-blur sm:p-6">
              <div className="flex items-center justify-between gap-4 border-b border-[var(--download-border)] pb-5">
                <div className="flex items-center gap-3">
                  <Image src="/brand/logo-official.png" alt="Dira OS" width={48} height={48} className="h-12 w-12 rounded-xl object-contain" />
                  <div><p className="text-sm font-bold text-[var(--download-heading)]">Dira OS</p><p className="mt-0.5 text-xs text-[var(--download-muted)]">Business operating system</p></div>
                </div>
                <span className="rounded-full border border-[var(--download-accent)]/25 bg-[var(--download-accent-soft)] px-2.5 py-1 text-[10px] font-bold text-[var(--download-accent-text)]">v{latestRelease.version}</span>
              </div>
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(["windows", "macos", "linux", "android", "ios", "web"] as PlatformId[]).map((id) => {
                  const Icon = platformIcons[id];
                  const platform = downloadPlatforms.find((item) => item.id === id);
                  return <button key={id} type="button" onClick={() => selectPlatform(id)} className={cn("group flex min-h-20 flex-col items-center justify-center gap-2 rounded-xl border text-[10px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]", selectedPlatform === id ? "border-[var(--download-border-strong)] bg-[var(--download-primary-soft)] text-[var(--download-heading)]" : "border-[var(--download-border)] bg-[var(--download-soft)] text-[var(--download-muted)] hover:border-[var(--download-border-strong)] hover:text-[var(--download-heading)]")} aria-label={`View ${platform?.label} downloads`}><Icon className="h-5 w-5" aria-hidden="true" /><span>{platform?.shortLabel}</span></button>;
                })}
              </div>
              <div className="mt-5 rounded-xl border border-[var(--download-blue-border)] bg-[var(--download-bg)]/65 p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[var(--download-blue)]">{detectedPlatform ? "Device match found" : "Choose your platform"}</p>
                <div className="mt-2 flex items-center gap-2.5"><SelectedIcon className="h-5 w-5 text-[var(--download-accent)]" aria-hidden="true" /><p className="text-sm font-semibold text-[var(--download-heading)]">{detectedPlatform === selectedPlatform ? "Recommended for your device" : selected.label}</p></div>
                <p className="mt-2 text-xs leading-5 text-[var(--download-muted)]">{detectedPlatform ? `Detected ${downloadPlatforms.find((item) => item.id === detectedPlatform)?.label ?? "platform"}. You can switch at any time.` : "We could not identify your operating system. Select a platform manually below."}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--download-border)] bg-[var(--download-surface)] py-8 sm:py-10">
        <div className="mx-auto w-full max-w-[77rem] px-4 sm:px-6 lg:px-8">
          <div role="tablist" aria-label="Choose your platform" className="flex gap-2 overflow-x-auto pb-1">
            {downloadPlatforms.map((platform, index) => {
              const Icon = platformIcons[platform.id];
              const isSelected = platform.id === selected.id;
              return <button key={platform.id} ref={(element) => { tabRefs.current[index] = element; }} type="button" role="tab" aria-selected={isSelected} aria-controls="platform-downloads" tabIndex={isSelected ? 0 : -1} onClick={() => selectPlatform(platform.id)} onKeyDown={(event) => handleTabKeyDown(event, index)} className={cn("inline-flex min-h-11 shrink-0 items-center gap-2 rounded-xl border px-4 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]", isSelected ? "border-[var(--download-border-strong)] bg-[var(--download-primary-soft)] text-[var(--download-heading)]" : "border-[var(--download-border)] bg-[var(--download-soft)] text-[var(--download-muted)] hover:border-[var(--download-border-strong)] hover:text-[var(--download-heading)]")}><Icon className="h-4 w-4" aria-hidden="true" />{platform.label}</button>;
            })}
          </div>
        </div>
      </section>

      <section id="platform-downloads" className="scroll-mt-8 bg-[var(--download-surface)] py-14 sm:py-20 lg:py-24" role="tabpanel" aria-label={`${selected.label} downloads`}>
        <div className="mx-auto w-full max-w-[77rem] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--download-blue)]">Platform downloads</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[var(--download-heading)] sm:text-5xl">Dira OS for {selected.label}</h2><p className="mt-4 text-base leading-7 text-[var(--download-body)]">{selected.description}</p></div>
            <div className={cn("inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold", platformStatusClass(selected.status))}><span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />{selected.statusLabel}</div>
          </div>

          {selected.artifacts.length ? (
            <div className="mt-9 grid gap-4 lg:grid-cols-2">{selected.artifacts.map((artifact) => <ArtifactCard key={artifact.id} artifact={artifact} />)}</div>
          ) : (
            <div className="mt-9 rounded-2xl border border-dashed border-[var(--download-border)] bg-[var(--download-card)] p-6 sm:p-8"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--download-soft-strong)] text-[var(--download-muted)]"><SelectedIcon className="h-5 w-5" aria-hidden="true" /></div><h3 className="mt-5 text-xl font-semibold text-[var(--download-heading)]">No verified download to show yet</h3><p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--download-body)]">{selected.unavailableMessage}</p><p className="mt-4 text-xs font-semibold text-[var(--download-muted)]">We will add an official action here only after the artifact or destination is published and verified.</p></div>
          )}

          {selected.id === "android" ? <div className="mt-5"><AndroidInstallationGuide /></div> : null}
        </div>
      </section>

      <section id="release" className="border-y border-[var(--download-border)] bg-[var(--download-bg)] py-14 sm:py-20">
        <div className="mx-auto grid w-full max-w-[77rem] gap-8 px-4 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:px-8">
          <div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--download-blue)]">Latest stable release</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[var(--download-heading)] sm:text-4xl">A release record you can verify.</h2><p className="mt-4 max-w-lg text-sm leading-6 text-[var(--download-body)]">The current public release record covers Android. Desktop, Linux, iOS, and web artifacts are intentionally absent until they have official destinations.</p></div>
          <div className="rounded-2xl border border-[var(--download-border)] bg-[var(--download-card)] p-5 sm:p-6"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[var(--download-accent)]">{latestRelease.platform} · stable</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[var(--download-heading)]">Dira OS {latestRelease.version}</h3></div><span className="rounded-full border border-[var(--download-blue-border)] bg-[var(--download-blue-soft)] px-3 py-1.5 text-xs font-semibold text-[var(--download-blue)]">Released {latestRelease.date}</span></div><div className="mt-6 grid gap-3 sm:grid-cols-2">{latestRelease.notes.map((note) => <div key={note} className="flex items-start gap-2.5 rounded-xl border border-[var(--download-border)] bg-[var(--download-bg)]/65 p-3 text-sm text-[var(--download-body)]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--download-accent)]" aria-hidden="true" />{note}</div>)}</div><div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--download-border)] pt-4 text-xs text-[var(--download-muted)]"><span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-3.5 w-3.5 text-[var(--download-accent)]" aria-hidden="true" />APK checksum published</span><span>Detailed changelog not published</span></div></div>
        </div>
      </section>

      <section id="faq" className="bg-[var(--download-surface)] py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[77rem] px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--download-blue)]">Installation help</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[var(--download-heading)] sm:text-5xl">Questions before you install?</h2><p className="mt-4 text-base leading-7 text-[var(--download-body)]">Clear answers for the platforms and artifacts that are actually published today.</p></div><div className="mt-9 grid gap-3 lg:grid-cols-2">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-[var(--download-border)] bg-[var(--download-card)] p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-sm font-semibold text-[var(--download-heading)] [&::-webkit-details-marker]:hidden"><span>{question}</span><ChevronDown className="h-4 w-4 shrink-0 text-[var(--download-muted)] transition group-open:rotate-180" aria-hidden="true" /></summary><p className="mt-4 border-t border-[var(--download-border)] pt-4 text-sm leading-6 text-[var(--download-body)]">{answer}</p></details>)}</div></div>
      </section>

      <section className="border-t border-[var(--download-border)] bg-[var(--download-bg)] py-14 text-center sm:py-20"><div className="mx-auto max-w-2xl px-4 sm:px-6"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--download-accent)]">Need a hand?</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[var(--download-heading)] sm:text-5xl">We publish the truth about every build.</h2><p className="mt-4 text-base leading-7 text-[var(--download-body)]">If your platform is not listed yet, contact support for availability rather than downloading an unofficial installer.</p><a href="/contact" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl border border-[var(--download-border)] bg-[var(--download-soft)] px-5 py-3 text-sm font-semibold text-[var(--download-heading)] transition hover:border-[var(--download-border-strong)] hover:bg-[var(--download-soft-strong)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--download-blue)]">Contact support <ChevronRight className="h-4 w-4" aria-hidden="true" /></a></div></section>
    </div>
  );
}
