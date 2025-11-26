"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function AboutPage() {
  // Fade-in logic reused from Services Page
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-block");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 overflow-hidden fade-block opacity-0">
          <img
            src="/about-1st-call-hero-03.png"
            alt="1st Call UK Immigration Advisers"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12">

          <h1 className="text-3xl font-bold text-[#2d459c] mb-6 text-center fade-block opacity-0">
            About Us — 1st Call UK Immigration Services
          </h1>

          <div className="text-gray-700 space-y-5 leading-relaxed">

            <p className="fade-block opacity-0">
              For over fifteen years, <strong>1st Call UK</strong> has been a dedicated immigration
              consultancy based in Nottingham, specialising exclusively in immigration and asylum
              matters. Unlike general law firms, we focus entirely on immigration law—giving us the
              time and expertise to keep pace with frequent regulatory changes and deliver
              high-quality, tailored advice.
            </p>

            <p className="fade-block opacity-0">
              We take pride in our reputation for excellence, built on referrals from clients across
              the UK and around the world. Since 2008, we have helped individuals, families, and
              businesses navigate the complexities of UK immigration—from initial visa applications
              to critical appeal stages.
            </p>

            <h2 className="text-2xl font-semibold text-[#2d459c] mt-10 fade-block opacity-0">
              Our Approach
            </h2>

            <p className="fade-block opacity-0">
              Our approach is personal yet professional. We believe that clear communication is
              vital — you will not only receive guidance on what you need to do, but also a full
              explanation of why it matters. We treat every case as uniquely important and invest
              the time to understand your circumstances, so we can represent you with clarity,
              integrity, and care.
            </p>

            {/* Family-Owned Highlight Section */}
            <div className="bg-[#f6f7fb] border border-[#2d459c]/20 rounded-xl p-6 md:p-8 mt-10 shadow-sm fade-block opacity-0">
              <h2 className="text-2xl font-semibold text-[#2d459c] mb-4 text-center">
                A Family-Owned and Operated Immigration Service
              </h2>
              <p className="text-gray-700 leading-relaxed text-center">
                1st Call UK Immigration Services is proudly a <strong>family-owned and family-operated</strong> consultancy,
                built on values of trust, integrity, and personal dedication. Our clients are never
                treated as case numbers — they are welcomed with the same respect, commitment, and care
                we show to our own family. This foundation allows us to offer a warm, supportive, and
                human approach to every immigration matter, ensuring that the people we help always feel
                heard, valued, and guided with genuine compassion.
              </p>
            </div>

            {/* ⭐ Meet Our Team Link */}
            <div className="text-center mt-8 fade-block opacity-0">
              <a
                href="/our-immigration-team"
                className="inline-block px-8 py-3 bg-[#2d459c] text-white font-semibold rounded-md shadow-md hover:bg-[#22347a] transition duration-300"
              >
                Meet Our Team →
              </a>
            </div>

            {/* ⭐⭐⭐ AWARD BADGE ⭐⭐⭐ */}
            <div className="flex justify-center mt-10 fade-block opacity-0">
              <a
                target="_blank"
                href="https://threebestrated.co.uk/immigration-consultants-in-nottingham"
                style={{ display: "inline-block", border: 0 }}
                rel="noopener noreferrer"
              >
                <img
                  style={{ width: "350px", display: "block" }}
                  width="350"
                  src="https://threebestrated.co.uk/awards/immigration_consultants-nottingham-2025-drk.svg"
                  alt="Best Immigration consultants in Nottingham"
                />
              </a>
            </div>
            {/* END AWARD */}

            <h2 className="text-2xl font-semibold text-[#2d459c] mt-10 fade-block opacity-0">
              Why Choose 1st Call UK?
            </h2>

            <ul className="list-disc list-inside space-y-3 pl-2 fade-block opacity-0">
              <li>
                <strong>Free Initial Conference</strong> – All new clients are offered a no-cost
                consultation where we discuss your situation honestly and determine your best course
                of action.
              </li>
              <li>
                <strong>Specialist Focus</strong> – Immigration law is all we do; we do not divide
                our attention with other practice areas.
              </li>
              <li>
                <strong>International Reach</strong> – Our clients come from many countries and
                backgrounds; recommendations extend from Nottingham to Afghanistan, Ukraine, Russia,
                and the UAE.
              </li>
              <li>
                <strong>Clear Costs</strong> – Transparent advice, fair fees, and no hidden
                surprises — because trust is the foundation of our work.
              </li>
              <li>
                <strong>Client-First Service</strong> – Small enough to give personalised attention,
                but experienced enough to handle complex cases effectively.
              </li>
            </ul>

            <p className="fade-block opacity-0">
              When you work with us, you’ll have a dedicated adviser by your side who will guide you
              through every step of your application or appeal. Your success is our mission, and
              your peace of mind is our priority.
            </p>

            <p className="font-semibold text-[#2d459c] text-center mt-8 fade-block opacity-0">
              Let’s make your immigration goals a reality. Whether you’re pursuing a work visa,
              family settlement, or citizenship, 1st Call UK is ready to help you navigate the
              process with confidence and care.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
