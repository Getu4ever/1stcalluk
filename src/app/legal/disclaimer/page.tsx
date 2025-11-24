import fs from "fs";
import path from "path";

export const metadata = {
  title: "Disclaimer | 1st Call UK",
  description:
    "Read our disclaimer for information about the limitations of liability regarding the use of this website.",
};

export default function DisclaimerPage() {
  const filePath = path.join(process.cwd(), "public/legal/disclaimer.txt");
  const content = fs.readFileSync(filePath, "utf8");

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#2d459c] text-white px-6 py-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Disclaimer</h1>
          <p className="text-white/90 mt-2">
            Important notice regarding the information on this website.
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
