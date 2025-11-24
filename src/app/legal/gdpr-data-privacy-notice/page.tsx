import fs from "fs";
import path from "path";

export const metadata = {
  title: "GDPR Data Privacy Notice | 1st Call UK",
  description:
    "Our GDPR Data Privacy Notice explains how we collect, use, and protect your personal data.",
};

export default function GDPRPage() {
  const filePath = path.join(
    process.cwd(),
    "public/legal/gdpr-data-privacy-notice.txt"
  );
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#2d459c] text-white px-6 py-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            GDPR Data Privacy Notice
          </h1>
          <p className="text-white/90 mt-2">
            Learn how we handle and protect your personal information.
          </p>
        </div>

        <div className="p-6 md:p-8">
          <div className="prose prose-sm md:prose-lg max-w-none text-gray-800 leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>
      </div>
    </main>
  );
}
