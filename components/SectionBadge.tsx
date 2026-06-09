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
    <>
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
      <style>{`
        @keyframes aladino-badge {
          0%   { opacity:0; transform: scale(0.55) rotate(-9deg) translateY(22px); }
          40%  { transform: scale(1.22) rotate(5deg) translateY(-8px); }
          62%  { transform: scale(0.91) rotate(-2deg) translateY(3px); }
          80%  { transform: scale(1.07) rotate(1deg) translateY(-1px); }
          100% { opacity:1; transform: scale(1) rotate(0deg) translateY(0); }
        }
      `}</style>
    </>
  );
}
