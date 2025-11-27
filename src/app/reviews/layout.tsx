import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Reviews | 300+ Five-Star Immigration Lawyer Testimonials | 1st Call UK",
  description:
    "Read real client reviews for Nottingham’s top-rated immigration advisors. 300+ 5-star testimonials for visa success, appeals, asylum cases and complex immigration matters.",
};

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
