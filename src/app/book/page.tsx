import CalendlyEmbed from '../components/CalendlyEmbed';
export default function BookPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6">
        Book a Consultation
      </h1>

      <CalendlyEmbed />
    </main>
  );
}
