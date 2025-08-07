import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

interface ScaleToFitProps {
  children: React.ReactNode;
  padding?: number; // extra padding inside container
}

// Scales its child down (never up) so the entire content fits inside the parent container.
const ScaleToFit: React.FC<ScaleToFitProps> = ({ children, padding = 16 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  const recalc = () => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const cw = Math.max(container.clientWidth - padding * 2, 0);
    const ch = Math.max(container.clientHeight - padding * 2, 0);

    // Measure natural size (not affected by transform)
    const contentRect = content.getBoundingClientRect();
    const naturalWidth = content.offsetWidth || contentRect.width;
    const naturalHeight = content.offsetHeight || contentRect.height;

    if (naturalWidth === 0 || naturalHeight === 0 || cw === 0 || ch === 0) {
      setScale(1);
      return;
    }

    const next = Math.min(cw / naturalWidth, ch / naturalHeight, 1);
    setScale(next);
  };

  useLayoutEffect(() => {
    recalc();
    const ro = new ResizeObserver(recalc);
    if (containerRef.current) ro.observe(containerRef.current);
    if (contentRef.current) ro.observe(contentRef.current);
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    // Recalc after fonts/images load
    const id = window.setTimeout(recalc, 50);
    return () => window.clearTimeout(id);
  }, [children]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-center justify-center overflow-hidden">
      <div
        ref={contentRef}
        style={{ transform: `scale(${scale})`, transformOrigin: "center center" }}
        className="will-change-transform"
      >
        {children}
      </div>
    </div>
  );
};

export default ScaleToFit;
