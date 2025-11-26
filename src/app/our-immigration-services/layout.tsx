import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Immigration Services | Visa Applications, Appeals & Sponsorship | 1st Call UK",
  description:
    "Comprehensive UK immigration services: visa applications, extensions, family reunion, asylum, refusals & appeals, sponsor licences and case reviews. Expert guidance from Nottingham’s trusted immigration specialists.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

            {/* ===== SERVICE PAGE SCHEMA ===== */}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "UK Immigration Advice & Representation",
      "provider": {
        "@type": "LegalService",
        "name": "1st Call UK Immigration Services",
        "url": "https://1stcalluk.com/our-immigration-services",
        "telephone": "+441158453325"
      },
      "areaServed": "United Kingdom",
      "description":
        "Expert UK immigration advice covering visas, appeals, asylum, family settlement, work visas and sponsor licences."
    }),
  }}
/>
