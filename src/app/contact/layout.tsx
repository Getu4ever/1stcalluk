import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Speak to UK Immigration Lawyers in Nottingham | 1st Call UK",
  description:
    "Book your consultation with Nottingham’s leading immigration lawyers. Call, email or visit our office for expert visa, appeal and asylum support today.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
