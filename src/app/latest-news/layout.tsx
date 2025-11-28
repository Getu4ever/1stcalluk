import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Coverage & Legal Updates | 1st Call UK",
  description:
    "Explore national media coverage and legal updates featuring 1st Call UK, including key immigration cases and judicial review developments.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/latest-news",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Media Coverage & Legal Updates | 1st Call UK",
    description:
      "Explore national media coverage and legal updates featuring 1st Call UK, including key immigration cases and judicial review developments.",
    url: "https://www.1stcallukimmigration.co.uk/latest-news",
    type: "article",
    siteName: "1st Call UK Immigration Services",
  },
};

export default function MediaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
