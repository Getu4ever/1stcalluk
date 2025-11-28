import type { Metadata } from "next";

export const metadata: Metadata = {
title: "Secure Immigration Document Management | 1st Call UK",
description:
  "A secure digital document management system for immigration cases. Fast access, safe storage and GDPR-compliant handling for all case documents."
};

export default function DmsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
