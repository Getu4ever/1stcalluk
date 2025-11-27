import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Immigration News, Media Coverage & Legal Updates | 1st Call UK",
  description:
    "See 1st Call UK featured across national media. Immigration news, judicial reviews, key legal cases, policy updates and press coverage from Nottingham’s leading immigration advisors.",
};

export default function MediaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
