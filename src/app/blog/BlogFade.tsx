"use client";
import { useEffect } from "react";

export default function BlogFade({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const sections = document.querySelectorAll(".blog-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
  }, []);

  return <>{children}</>;
}
