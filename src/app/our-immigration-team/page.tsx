"use client";
import { useEffect } from "react";

export default function TeamPage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-section");
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
    sections.forEach((section) => observer.observe(section));
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Hero Image */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/team-hero-final.png"
            alt="Our Immigration Team"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">
          {/* Our People */}
          <section className="fade-section">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4 text-center">
              Our People
            </h1>
            <p className="text-gray-700 leading-relaxed">
              At <strong>1st Call UK</strong>, we believe our clients’ needs come before our own.
              The founder of 1st Call UK, <strong>James</strong>, established the firm
              with a vision to deliver affordable, caring, and high-quality immigration advice —
              treating every client with the same dedication and respect we would show our own
              families and friends. At 1st Call UK, our clients always come first.
            </p>
          </section>

          {/* Experience Counts */}
          <section className="fade-section">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
              Experience Counts
            </h2>
            <p className="text-gray-700 leading-relaxed">
              James founded 1st Call UK in 2008 after many years of experience in immigration and
              asylum law. He has served as a Trustee and Director of a local non-profit organisation
              that provides assistance to asylum seekers in Nottingham and Nottinghamshire.
              With over <strong>24 years of immigration experience</strong>, James has built a
              reputation for professionalism, dedication, and success.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Over the years, James and 1st Call UK have worked on numerous high-profile and
              challenging cases that have drawn national attention. Most notably, James appeared on
              a Channel 5 documentary titled{" "}
              <em>“Immigration – Tearing Our Family Apart.”</em>
            </p>

            <div className="mt-6">
              <img
                src="/james-ramowski-advising-asylum-seeker-1st-call-uk-immigration-services.png"
                alt="Experienced immigration law advisers"
                className="rounded-xl shadow-md w-full object-cover"
              />
            </div>
          </section>

          {/* ⭐ NEW SECTION: Biography of James Ramowski (Inserted Here) */}
          <section className="fade-section bg-[#f8f9ff] border border-[#dfe3ff] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
              About James - Our Senior Adviser
            </h2>
            <p className="text-gray-700 leading-relaxed">
              <strong>James</strong> is the Founder and Principal Immigration Adviser at
              1st Call UK Immigration Services. With more than two decades of legal experience,
              James has established himself as one of Nottingham’s most trusted immigration
              specialists. His career began with voluntary work supporting vulnerable asylum
              seekers, a role that shaped his compassionate and client-focused approach.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout his career, James has worked closely with families, students, workers, and
              individuals facing some of the most complex immigration challenges. His ability to
              simplify difficult legal processes and advocate for clients during life-changing
              moments has earned him deep respect within the community.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Known for his calm, analytical approach, James has handled high-profile media cases
              and continues to advise on applications, appeals, and judicial review matters. His
              leadership and dedication form the foundation of 1st Call UK’s reputation for fairness,
              transparency, and results.
            </p>
          </section>


          {/* A Personal Touch */}
          <section className="fade-section">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
              A Personal Touch
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Beyond his professional life, James is a devoted husband and father. He is a former
              Chairman of the Hucknall Round Table — part of Round Table International — and a past
              committee member of the Wollaton Royal British Legion Club. Outside of work, he enjoys
              dining, socialising, cycling, and spending quality time with his family, reflecting
              the same empathy and integrity he brings to his clients’ cases.
            </p>
          </section>

          {/* ...YOUR REMAINING CODE IS UNCHANGED... */}

        </div>
      </div>
    </main>
  );
}
