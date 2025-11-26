import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Immigration Lawyers & Advisers | Nottingham Legal Experts | 1st Call UK",
  description:
    "Meet the experienced UK immigration advisers behind 1st Call UK. Specialists in visas, appeals, asylum law and Home Office applications with 15+ years of proven success.",
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
