"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Check, Download, ExternalLink, FileDown, Smartphone, X } from "lucide-react";
import { siteConfig } from "@/config/site";

export function DownloadModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = Array.from(modalRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="modal-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div ref={modalRef} className="download-modal" role="dialog" aria-modal="true" aria-labelledby="download-title" aria-describedby="download-description">
        <button ref={closeButtonRef} className="modal-close" onClick={onClose} aria-label="Close download options"><X size={17} /></button>
        <span className="eyebrow"><Download size={13} /> Download Dira OS</span>
        <h2 id="download-title">Choose your installation path.</h2>
        <p id="download-description">Android is available today. Review every verified platform and release from the full download center.</p>
        <div className="download-options">
          <a href={siteConfig.playStoreUrl} className="download-option recommended" target="_blank" rel="noreferrer">
            <Smartphone size={18} /><span><b>Google Play</b><small>Recommended Android installation</small></span><em>Recommended</em><ExternalLink size={14} />
          </a>
          <a href={siteConfig.androidApkUrl} className="download-option" download>
            <FileDown size={18} /><span><b>Direct APK</b><small>Available Android package</small></span><Download size={14} />
          </a>
        </div>
        <a href="/download" className="download-option"><Check size={18} /><span><b>All platform downloads</b><small>See availability, requirements, checksums and installation help</small></span><ArrowRight size={14} /></a>
        <div className="modal-foot"><Check size={14} /> Android {siteConfig.minimumAndroidVersion} · Official HTTPS destinations</div>
        <p className="mt-4 text-center text-[11px] text-muted"><a className="underline underline-offset-2 hover:text-foreground" href="/download">View installation instructions</a></p>
      </div>
    </div>
  );
}
