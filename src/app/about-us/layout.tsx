import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Trusted Immigration Lawyers & advisors in Nottingham | 1st Call UK",
  description:
    "For over 15 years, 1st Call UK has helped families, workers and businesses navigate UK immigration law. Specialists in visas, appeals  cases. Learn more about our expert team.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
