"use client";
import { useEffect, useState } from "react";

export default function BlogFade({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Force visibility immediately after hydration
    setVisible(true);
  }, []);

  return (
    <div className={visible ? "animate-fade-in" : "opacity-0"}>
      {children}
    </div>
  );
}
