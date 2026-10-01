"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { DownloadModal } from "@/components/download/download-modal";

type DownloadContextValue = { openDownload: () => void };
const DownloadContext = createContext<DownloadContextValue | null>(null);

export function DownloadProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <DownloadContext.Provider value={{ openDownload: () => setOpen(true) }}>
      {children}
      <DownloadModal open={open} onClose={() => setOpen(false)} />
    </DownloadContext.Provider>
  );
}

export function useDownload() {
  const context = useContext(DownloadContext);
  if (!context) throw new Error("useDownload must be used inside DownloadProvider");
  return context;
}
