"use client";
import { useEffect, useState } from "react";
export function Preloader() { const [visible, setVisible] = useState(true); useEffect(() => { const id = window.setTimeout(() => setVisible(false), 900); return () => window.clearTimeout(id); }, []); if (!visible) return null; return <div className="preloader" aria-hidden="true"><div className="preloader-mark"><span /><b>Dira OS</b></div></div>; }
