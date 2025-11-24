import fs from "fs";
import path from "path";

export const metadata = {
  title: "Terms of Website Use | 1st Call UK",
  description:
    "The terms governing your use of the 1st Call UK Immigration Advisers website.",
};

export default function TermsOfUsePage() {
  const filePath = path.join(
    process.cwd(),
    "public/legal/terms-of-website-use.txt"
  );
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#2d459c] text-white px-6 py-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">
            Terms of Website Use
          </h1>
          <p className="text-white/90 mt-2">
            Please read these terms carefully before using this website.
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
