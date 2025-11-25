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

          {/* Your Problem is Our Passion */}
<section className="fade-section">
  <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
    Your Problem is Our Passion
  </h2>
  <p className="text-gray-700 leading-relaxed">
    As a family-owned and operated business, 1st Call UK stands for dedication,
    trust, and integrity. Our values are rooted in the personal commitment and
    consistent involvement of our family, who have built this firm from the
    ground up. We approach every client’s case with the same care and attention
    we would give to our own loved ones, ensuring that every individual who
    walks through our doors feels supported, respected, and understood.
    <br /><br />
    Our motto, <strong>“Your problem is our passion,”</strong> is more than a
    phrase—it reflects the spirit of our work. We embrace the challenges our
    clients face and treat each case as an opportunity to make a meaningful
    difference. Whether dealing with a straightforward application or a highly
    complex matter, we persevere until every option has been explored and every
    possible step has been taken. Your struggle becomes our mission, and your
    success is our priority.
  </p>

  <div className="mt-6">
    <img
      src="/team-hero-family.png"
      alt="Our dedicated immigration law team"
      className="rounded-xl shadow-md w-full object-cover"
    />
  </div>
</section>

{/* Family-Owned and Operated Business */}
<section className="fade-section">
  <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
    Family-Owned and Operated Business
  </h2>
  <p className="text-gray-700 leading-relaxed">
    Being a family-run firm shapes the way we work, the way we communicate, and
    the way we care for our clients. Our close-knit approach means clients are
    never treated as a number or an appointment slot — they are welcomed as part
    of our extended family. Decisions are made with integrity, long-term
    commitment, and genuine concern for the wellbeing of those who rely on us.
    <br /><br />
    This personal foundation has enabled us to build lasting relationships and
    earn the trust of communities across the UK. It is this sense of
    responsibility, pride, and personal investment that drives us to deliver the
    highest standard of service in every case we handle.
  </p>
</section>


          {/* Highest Level of Authorisation */}
          <section className="fade-section">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
              Highest Level of Authorisation
            </h2>
            <p className="text-gray-700 leading-relaxed">
              1st Call UK is authorised and regulated by the{" "}
              <strong>Immigration Advice Authority (IAA) - formerly known as the OISC</strong> at the
              highest level. This authorisation empowers us to advise and represent clients in all
              areas of immigration and asylum — from initial applications to appeals before the
              Upper Tribunal of the Immigration & Asylum Chamber.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              While we are authorised to represent clients directly, we often collaborate with
              experienced <strong>Immigration Barristers</strong> whose courtroom expertise ensures
              every case is presented with precision and confidence — guaranteeing that our clients
              are in the best possible hands.
            </p>
          </section>

          {/* Contact CTA */}
          <section className="fade-section text-center mt-10">
            <p className="text-gray-700 font-medium">
              Please{" "}
              <a
                href="/contact"
                className="text-[#2d459c] font-semibold hover:underline"
              >
                contact us
              </a>{" "}
              for further information or to arrange an appointment.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}