"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
  {
    title: "Visit Visas",
    image: "/visit-visa.jpg",
    description:
      "We provide full assistance with UK Visit Visa applications, ensuring your purpose of travel, financial circumstances, and ties to your home country are clearly presented. Our structured approach helps minimise refusal risks while preparing strong supporting evidence.",
  },
  {
    title: "Entry Clearance (Visas to Enter and Live in the UK)",
    image: "/entry-clearance.jpg",
    description:
      "We support clients applying for Entry Clearance from outside the UK, including Family, Work, and Long-term Settlement routes. We ensure all eligibility requirements, documentation, and evidential standards meet Home Office expectations for a successful visa application.",
  },
  {
    title: "Extensions – Further Leave to Remain",
    image: "/further-leave.jpg",
    description:
      "If you are already in the UK and need to extend your stay, we guide you through the Further Leave to Remain process. Our team reviews your current visa conditions, compliance history, and supporting documents to secure lawful continuation of your residence.",
  },
  {
    title: "Settlement (Indefinite Leave to Remain)",
    image: "/ilr.jpg",
    description:
      "We assist applicants seeking Indefinite Leave to Remain (ILR), ensuring all residency requirements, absences, and lawful status criteria are satisfied. We prepare applications with precision to maximise the likelihood of achieving permanent settlement in the UK.",
  },
  {
    title: "Naturalisation (Becoming British for Adults)",
    image: "/naturalisation.png",
    description:
      "For adults wishing to become British citizens, we provide tailored support with Naturalisation applications. We ensure eligibility, good character requirements, language standards, and residency rules are correctly evidenced to support a successful outcome.",
  },
  {
    title: "Registration (Becoming British for Children)",
    image: "/child-registration.jpg",
    description:
      "We assist parents and guardians with registering children as British citizens under the various statutory routes. Our advisors guide you through eligibility categories, evidential requirements, and legal complexities to ensure a well-prepared application.",
  },
  {
    title: "Visa Appeals and Refusals",
    image: "/visa-refusal.jpg",
    description:
      "If your application has been refused, we analyse the decision letter, identify legal or procedural errors, and advise on the strongest remedy available. We prepare appeals, reconsideration requests, or fresh applications depending on the merits of your case.",
  },
  {
    title: "Appeals to the Upper Tribunal",
    image: "/upper-tribunal.png",
    description:
      "We represent clients seeking to challenge First-tier Tribunal decisions. Our service includes drafting expert legal submissions, preparing evidence bundles, and presenting strong grounds of appeal before the Upper Tribunal.",
  },
  {
    title: "Judicial Review Pre-Action, Legislation and Case Reviews / Referrals to Solicitors / Barristers",
    image: "/judicial-review.jpg",
    description:
      "We prepare detailed pre-action protocol letters (PAPs) for Judicial Review matters where Home Office decisions are unlawful or irrational. We also conduct in-depth case reviews and provide referrals to specialist solicitors or barristers when litigation is appropriate.",
  },
];

  // Fade-in effect
  useEffect(() => {
    const cards = document.querySelectorAll(".service-card");
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

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="opacity-0 animate-fade-in text-4xl font-extrabold text-center text-[#2d459c] mb-4">
          Our Services
        </h1>

        <p
          className="opacity-0 animate-fade-in text-center text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed"
          style={{ animationDelay: "0.15s" }}
        >
          At <strong>1st Call UK – Immigration Services</strong>, we provide tailored, expert
          immigration support for individuals, families, and businesses across the UK.
          Explore our key service areas below to see how we can help you achieve your goals.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card opacity-0 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              <Image
                src={service.image}
                alt={service.title}
                width={800}
                height={450}
                className="w-full h-56 object-cover"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-semibold text-[#2d459c] mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-700 mb-4">
            Ready to discuss your immigration needs? Schedule a meeting with one of our
            experienced advisors and take the first step toward your immigration goals.
          </p>

          <a
            href="/contact"
            className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
          >
            Schedule a Meeting
          </a>
        </div>
      </div>
    </main>
  );
}
