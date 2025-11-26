import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secure Document Management for Immigration Cases | 1st Call UK",
  description:
    "Trusted document management for UK immigration cases. Secure storage, fast retrieval, GDPR-compliant digital archiving and full case transparency for visa and appeal applications.",
};

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
