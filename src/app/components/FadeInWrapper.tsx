"use client";

import { useEffect } from "react";

export default function FadeClient({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-blog");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return <div className="fade-blog">{children}</div>;
}
