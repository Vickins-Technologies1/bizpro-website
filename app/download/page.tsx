import type { Metadata } from "next";
import { Download, ExternalLink, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { buildMetadata } from "@/lib/seo";
import { releases } from "@/config/releases";

export const metadata: Metadata = buildMetadata({ title: "Download Dira OS", description: "Download Dira OS for desktop and mobile.", path: "/download" });

export default function DownloadPage() {
  return <section className="section"><Container><div className="section-heading"><span className="eyebrow"><Download size={13}/> Get Dira OS</span><h1>Download Dira OS</h1><p>Install the offline-first operating system for the way your business moves. Choose your platform below.</p></div><div className="release-grid">{releases.map((release, i)=><article className="release-card" key={release.platform}><div><span className="release-platform">{release.platform}</span>{i === 0 && <em>Recommended</em>}</div><h2>Version {release.version}</h2><p>{release.size} · {release.date}</p><a className="button primary" href={release.href} target={release.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{release.version === "—" ? "Coming soon" : "Download"}<ExternalLink size={14}/></a>{release.checksum && <small><ShieldCheck size={13}/> SHA-256: {release.checksum}</small>}</article>)}</div><div className="install-guide"><div><span className="eyebrow">Install offline</span><h2>Keep working when the connection doesn’t.</h2><p>Install the desktop app, sign in once while online, and continue recording sales and stock movements when connectivity drops. Dira OS syncs changes automatically when you reconnect.</p></div><ol><li><b>Download</b><span>Choose your platform and run the installer.</span></li><li><b>Sign in once</b><span>Connect your workspace before going offline.</span></li><li><b>Keep trading</b><span>Sales are saved locally and reconciled later.</span></li></ol></div><div className="changelog"><span className="eyebrow">Release notes</span><h2>What’s new</h2><p>Version 1.0.0 · The first Dira OS release, with sales, inventory, offline sync, finance and multi-branch workspaces.</p></div></Container></section>;
}
