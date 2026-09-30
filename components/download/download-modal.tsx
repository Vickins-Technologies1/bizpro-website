"use client";
import { useEffect, useState } from "react";
import { Apple, Check, Download, Monitor, Smartphone, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DownloadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [email, setEmail] = useState("");
  useEffect(() => { if (!open) return; const close = (e: KeyboardEvent) => e.key === "Escape" && onClose(); window.addEventListener("keydown", close); document.body.style.overflow = "hidden"; return () => { window.removeEventListener("keydown", close); document.body.style.overflow = ""; }; }, [open, onClose]);
  if (!open) return null;
  const options = [[Smartphone,"Android","Google Play",siteConfig.playStoreUrl],[Apple,"iOS","Coming soon","#"],[Monitor,"Windows","Installer · 1.0.0","/download"],[Monitor,"macOS","Installer · 1.0.0","/download"],[Monitor,"Linux","AppImage · 1.0.0","/download"]] as const;
  return <div className="modal-backdrop" onMouseDown={e=>e.target===e.currentTarget&&onClose()}><div className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title"><button className="modal-close" onClick={onClose} aria-label="Close"><X size={17}/></button><span className="eyebrow">Get started</span><h2 id="download-title">Download Dira OS</h2><p>Choose the best way to run your business. Your device is ready.</p><div className="download-options">{options.map(([Icon,name,detail,href],i)=><a href={href} key={name} className={`download-option ${i===0?"recommended":""}`} target={href.startsWith("http")?"_blank":undefined} rel="noreferrer"><Icon size={18}/><span><b>{name}</b><small>{detail}</small></span>{i===0&&<em>Recommended</em>}<Download size={14}/></a>)}</div><div className="email-download"><label htmlFor="download-email">Email me the download link</label><div><input id="download-email" type="email" placeholder="you@business.com" value={email} onChange={e=>setEmail(e.target.value)}/><button className="button primary compact" onClick={()=>setEmail("")}>Send</button></div></div><div className="modal-foot"><Check size={14}/> Free to start · Works offline · No credit card</div></div></div>;
}
