import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Immigration News & Legal Insights | Visa & Appeal Guides | 1st Call UK Blog",
  description:
    "Expert articles on UK visas, immigration rules, asylum decisions, legal updates, appeal strategies and Home Office guidance — written by specialist immigration advisers.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

{/* ==== BLOG LISTING SCHEMA (BlogPosting) ==== */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "1st Call UK Immigration Blog",
      "url": "https://1stcalluk.com/blog",
      "description":
        "Latest UK immigration news, legal updates, visa guidance and appeal strategies.",
      "publisher": {
        "@type": "Organization",
        "name": "1st Call UK Immigration Services",
        "logo": "https://1stcalluk.com/1st-calluk-logo02.jpg"
      }
    }),
  }}
/>
