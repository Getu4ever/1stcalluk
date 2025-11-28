import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | 1st Call UK Immigration Services",
  description:
    "Learn about 1st Call UK Immigration Services, our expertise, and our commitment to helping individuals, families and businesses with UK visa and appeal matters.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/about-us",
  },

  // OpenGraph metadata for richer previews
  openGraph: {
    title: "About Us | 1st Call UK Immigration Services",
    description:
      "Learn about 1st Call UK Immigration Services and our commitment to UK visa and appeal support for individuals, families and businesses.",
    url: "https://www.1stcallukimmigration.co.uk/about-us",
    type: "article",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
