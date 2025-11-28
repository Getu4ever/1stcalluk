import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | Five-Star Feedback | 1st Call UK",
  description:
    "Read verified client reviews and five-star testimonials about our visa and appeal support. Trusted immigration advice backed by 300+ positive experiences.",

  // Canonical URL for SEO
  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk/reviews",
  },

  // OpenGraph metadata for social and Google previews
  openGraph: {
    title: "Client Reviews | Five-Star Feedback | 1st Call UK",
    description:
      "Read verified client reviews and five-star testimonials about our visa and appeal support. Trusted immigration advice backed by 300+ positive experiences.",
    url: "https://www.1stcallukimmigration.co.uk/reviews",
    type: "article",
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
