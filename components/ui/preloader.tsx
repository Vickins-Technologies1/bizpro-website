"use client";

import { useEffect, useState } from "react";
import { DiraMark3D } from "@/components/ui/dira-mark-3d";

const MINIMUM_VISIBLE_MS = 420;
const FALLBACK_TIMEOUT_MS = 4_500;
const EXIT_TRANSITION_MS = 620;

export function Preloader() {
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const startedAt = performance.now();
    let completed = false;
    let fallbackTimer = 0;
    let readyTimer = 0;
    let removeTimer = 0;

    const finish = () => {
      if (completed) return;
      completed = true;
      window.removeEventListener("load", finish);
      window.clearTimeout(fallbackTimer);

      const remaining = Math.max(0, MINIMUM_VISIBLE_MS - (performance.now() - startedAt));
      readyTimer = window.setTimeout(() => {
        setReady(true);
        removeTimer = window.setTimeout(() => setVisible(false), EXIT_TRANSITION_MS);
      }, remaining);
    };

    fallbackTimer = window.setTimeout(finish, FALLBACK_TIMEOUT_MS);

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(readyTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`preloader${ready ? " preloader--leaving" : ""}`} role="status" aria-live="polite">
      <DiraMark3D isExiting={ready} />
      <div className="preloader-content">
        <div className="preloader-copy">
          <span className="preloader-wordmark">Dira OS</span>
          <span className="preloader-status">{ready ? "Ready" : "Preparing your workspace"}</span>
        </div>
        <span className="preloader-progress" aria-hidden="true"><span /></span>
      </div>
    </div>
  );
}
