export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-lg p-10 text-center animate-fade-in">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
          1st Call UK Financial Services
        </h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mb-6">
          Our brand-new website is currently being created.
        </p>

        {/* Icon / Graphic */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#2d459c] text-white flex items-center justify-center rounded-full shadow-md text-4xl">
            ⏳
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-600 leading-relaxed mb-6">
          We’re working hard behind the scenes to bring you expert mortgage and financial advice in a modern, fully featured online experience.  
          <br /><br />
          Please check back soon.
        </p>

        {/* Back button */}
        <a
          href="/"
          className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </main>
  );
}
