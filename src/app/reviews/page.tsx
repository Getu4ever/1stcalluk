"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function ReviewsPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        
        {/* === Hero Section === */}
        <div className="w-full h-64 md:h-80 overflow-hidden fade-section relative">
          <Image
            src="/reviews-hero.jpg"
            alt="Happy clients after successful immigration cases"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* === Reviews Content === */}
        <div className="p-8 md:p-12 space-y-12">

          {/* === Intro Section === */}
          <section
            className="fade-section text-center opacity-0 mb-16"
            style={{ animationDelay: "0.3s" }}
          >
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4">
              We're Proud of Our Work
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-4">
              At <strong>1st Call UK Immigration Services</strong>, we’re proud
              of the trust our clients place in us. James does not take on cases he believes cannot succeed,
              prioritising results over financial gain. With{" "}
              <strong>thousands of successful applications and appeals over the years</strong> and a reputation
              for care and professionalism, our team is dedicated to achieving
              the best results for every individual and family we serve.
            </p>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-6">
              We always appreciate feedback from those we’ve helped. If you’d
              like to share your experience, please leave us a review on Google
              or on our official Facebook page — your words help others find
              trusted immigration advice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <a
                href="https://www.google.com/maps/place/1st+Call+Immigration+Services/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2d459c] text-white font-semibold py-2 px-6 rounded-md hover:bg-[#1f3171] transition-colors duration-300"
              >
                🌟 Read Our Google Reviews
              </a>
              <a
                href="https://www.facebook.com/1stCallUK2008/?locale=en_GB"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                👍 Leave a Facebook Review
              </a>
            </div>
          </section>

          {/* === Testimonials Section === */}
          <section className="fade-section text-center opacity-0 mt-20">
            <h2 className="text-3xl font-bold text-[#2d459c] mb-6">
              Client Testimonials
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our clients’ satisfaction is the greatest measure of our success.
              For over eighteen years, we have helped individuals and families
              overcome the complexities of immigration law with honesty,
              dedication, and care. Here’s what some of our clients have shared
              about their experience with <strong>1st Call UK</strong>.
            </p>
          </section>

          {/* === Review Grid === */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-section opacity-0 mt-10">
            
            {[
              {
                review:
                  "“Absolutely fantastic service from start to finish. James guided me through every stage of my visa application and made a stressful process so much easier. Highly recommend!”",
                name: "Sarah A.",
                type: "Family Visa Client",
              },
              {
                review:
                  "“Professional, honest, and extremely knowledgeable. 1st Call UK helped me secure my visa after another advisor had given up. I am forever grateful for their persistence and expertise.”",
                name: "Ahmed K.",
                type: "Work Visa Client",
              },
              {
                review:
                  "“James and his team provided an excellent service when handling my immigration case. Their professionalism and empathy truly made a difference. Thank you for all your support.”",
                name: "Marina L.",
                type: "Immigration Client",
              },
              {
                review:
                  "“From the first call to the final approval, everything was handled efficiently and with care. You can tell they genuinely care about their clients’ futures.”",
                name: "John P.",
                type: "Settlement Visa Client",
              },
              {
                review:
                  "“Highly professional and trustworthy. They went above and beyond to make sure my case was presented in the best possible way. I couldn’t have asked for better representation.”",
                name: "Victor O.",
                type: "Appeal Client",
              },
              {
                review:
                  "“A big thank you to the entire team for their patience and professionalism. They made the whole process so smooth. I wouldn’t hesitate to recommend them to anyone.”",
                name: "Priya S.",
                type: "Citizenship Client",
              },
            ].map((r, i) => (
              <div
                key={i}
                className="bg-[#f9f9fb] p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              >
                {/* === UPDATED AVATAR WITH BRAND BACKGROUND === */}
                <div className="flex justify-center mb-3">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center shadow-md"
                    style={{ backgroundColor: "#2d459c" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                    </svg>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  <span className="text-yellow-400 text-xl">★★★★★</span>
                </div>

                <p className="text-gray-700 italic mb-4">{r.review}</p>
                <p className="font-semibold text-[#2d459c]">— {r.name}</p>
                <p className="text-sm text-gray-500">{r.type}</p>
              </div>
            ))}
          </div>

          {/* === Closing CTA === */}
          <section className="fade-section text-center mt-16 opacity-0">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-4">
              Your Success Story Could Be Next
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              We value the trust our clients place in us and are proud to have
              made a difference in so many lives. If you’d like to share your
              experience or begin your journey with 1st Call UK, we’d love to
              hear from you.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
            >
              Get in Touch
            </a>
          </section>

        </div>
      </div>
    </main>
  );
}
