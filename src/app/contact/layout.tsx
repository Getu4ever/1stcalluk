import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Immigration Advice in Nottingham | 1st Call UK",
  description:
    "Contact 1st Call UK for professional immigration advice. Book a consultation or reach us by phone or email for support with visas, appeals and UK immigration matters.",

  // Canonical URL
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/contact",
  },

  // OpenGraph metadata
  openGraph: {
    title: "Contact Us | Immigration Advice in Nottingham | 1st Call UK",
    description:
      "Contact 1st Call UK for professional immigration advice. Book a consultation or reach us by phone or email for support with visas, appeals and UK immigration matters.",
    url: "https://www.1stcallukimmigration.co.uk/contact",
    type: "article",
    siteName: "1st Call UK Immigration Services",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
