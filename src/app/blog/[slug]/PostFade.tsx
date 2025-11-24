"use client";

import { useEffect, useRef } from "react";

export default function PostFade({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Initial state BEFORE fade
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";

    // Trigger fade after small delay
    requestAnimationFrame(() => {
      el.classList.add("animate-fade-in");
    });
  }, []);

  return <div ref={ref}>{children}</div>;
}
