import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration Services & Visa Support | 1st Call UK",
  description:
    "Professional UK immigration services covering visas, extensions, family applications, appeals, sponsorship and complex Home Office matters.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://1stcalluk.com/our-immigration-services",
  },

  // OpenGraph metadata for social previews
  openGraph: {
    title: "Immigration Services & Visa Support | 1st Call UK",
    description:
      "Professional UK immigration services covering visas, extensions, family applications, appeals, sponsorship and complex Home Office matters.",
    url: "https://1stcalluk.com/our-immigration-services",
    type: "article",
    images: [
      {
        url: "https://1stcalluk.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UK Immigration Services by 1st Call UK",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}

      {/* ===== SERVICE PAGE SCHEMA ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "UK Immigration Advice & Representation",
            provider: {
              "@type": "LegalService",
              name: "1st Call UK Immigration Services",
              url: "https://1stcalluk.com/our-immigration-services",
              telephone: "+441158453325",
            },
            areaServed: "United Kingdom",
            description:
              "Expert UK immigration advice covering visas, appeals, family settlement, work visas and sponsor licences.",
          }),
        }}
      />
    </>
  );
}
