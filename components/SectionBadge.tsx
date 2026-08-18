"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionBadge({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setOn(true); },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className="inline-block text-[#d7c874] font-black text-sm uppercase tracking-widest mb-2"
      style={
        on
          ? { animation: "aladino-badge 0.72s cubic-bezier(0.22,1,0.36,1) both" }
          : { opacity: 0 }
      }
    >
      {children}
    </span>
  );
}
