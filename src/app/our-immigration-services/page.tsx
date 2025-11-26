"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Temporary or Permanent Residency Applications",
      image: "/residency.jpg",
      description:
        "We assist clients in obtaining the right to live and work in the UK, whether on a temporary visa or a pathway to permanent residency. Our advisers ensure your application meets all Home Office requirements and is presented with clarity and precision.",
    },
    {
      title: "Visa Extensions",
      image: "/visa-extension.jpg",
      description:
        "If your current visa is due to expire, we guide you through the process of extending your stay lawfully in the UK. Our team carefully reviews your eligibility, documentation, and timing to avoid any legal complications or overstays.",
    },
    {
      title: "Family Reunion & Sponsorship",
      image: "/family-reunion.jpg",
      description:
        "We understand the importance of being close to loved ones. Our advisers help reunite families by assisting with spousal, child, and dependent visa applications, ensuring your case is supported by strong evidence and legal compliance.",
    },
    {
      title: "Sponsoring Overseas Employees",
      image: "/sponsorship.jpg",
      description:
        "We help UK employers navigate the sponsorship system to bring skilled overseas workers into the country. From obtaining a Sponsor Licence to managing ongoing compliance, we provide complete support for your recruitment needs.",
    },
    {
      title: "Visa Refusals & Appeals",
      image: "/appeals.jpg",
      description:
        "A visa refusal is not the end of the road. Our experts analyse refusal notices, identify key legal errors, and prepare a compelling appeal to challenge unjust decisions. We represent you from the initial stage through to hearings before the Tribunal.",
    },
    {
      title: "Immigration Legislation & Case Reviews",
      image: "/case-review.jpg",
      description:
        "We assist clients in understanding complex immigration legislation and provide detailed case reviews. Our goal is to uncover grounds for appeal, reconsideration, or other remedies available under UK immigration law.",
    },
    {
      title: "Appeals to the Upper Tribunal",
      image: "/upper-tribunal.jpg",
      description:
        "For clients seeking to challenge previous appeal outcomes, we provide strategic representation before the Upper Tribunal. Our team prepares robust legal arguments supported by case law and evidence to defend your rights effectively.",
    },
    {
      title: "Referrals & Specialist Support",
      image: "/referrals.jpg",
      description:
        "We welcome referrals from solicitors, advisers, and agencies across the UK who need specialist assistance in complex immigration or asylum cases. Partner with our experienced team for accurate, dependable legal guidance.",
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
          Our Professional Immigration Services
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
            experienced advisers and take the first step toward your immigration goals.
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
