"use client";
import { useEffect } from "react";

export default function DocumentManagementPage() {
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
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* Hero Section */}
        <div className="w-full h-64 md:h-80 overflow-hidden">
          <img
            src="/dms-hero.png"
            alt="Document management for immigration cases"
            className="w-full h-full object-cover animate-fade-in"
          />
        </div>

        {/* Content Section */}
        <div className="p-8 md:p-12 space-y-10">

          {/* Main Heading */}
          <section className="fade-section">
            <h1 className="text-3xl font-bold text-[#2d459c] mb-4 text-center">
              Secure Document Management
            </h1>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-center">
              Managing sensitive immigration documents requires trust,
              efficiency, and accuracy. At <strong>1st Call UK</strong>, we
              provide a reliable document management system that ensures your
              important paperwork is handled with the utmost care and
              confidentiality.
            </p>
          </section>

          {/* What We Offer */}
          <section className="fade-section space-y-6">
            <h2 className="text-2xl font-semibold text-[#2d459c]">
              What We Offer
            </h2>

            <p className="text-gray-700 leading-relaxed">
              From visa applications to appeal bundles, our document management
              solutions are designed to simplify your process and eliminate
              unnecessary stress. We maintain a clear, secure system that keeps
              every document organised and accessible when you need it most.
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                <strong>Secure File Storage</strong> – Your documents are
                digitally archived in encrypted storage, ensuring complete
                privacy.
              </li>
              <li>
                <strong>Fast Retrieval</strong> – We use a structured, indexed
                filing system so your information can be retrieved instantly.
              </li>
              <li>
                <strong>Client Access</strong> – Receive digital copies of
                relevant forms, notices, and applications directly and securely.
              </li>
              <li>
                <strong>Data Protection Compliance</strong> – Fully compliant
                with GDPR and IAA requirements.
              </li>
              <li>
                <strong>Paper-to-Digital Conversion</strong> – We can scan and
                convert physical paperwork into secure digital files.
              </li>
            </ul>
          </section>

          {/* New Extended Section + Image */}
          <section className="fade-section">
            <div className="grid md:grid-cols-2 gap-8 items-center">

              {/* Left – Expanded text */}
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed">
                  Our digital document environment allows clients to remain fully
                  informed and supported throughout their case. Whether uploading
                  identification documents, submitting evidence, or requesting
                  copies of forms, our streamlined workflow ensures nothing is
                  misplaced and every update is tracked.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  We also maintain detailed audit logs for all documents handled,
                  ensuring full transparency and absolute accuracy during case
                  preparation. Each file is time-stamped, categorised, and stored
                  securely, allowing our advisors to keep your immigration matter
                  progressing smoothly and efficiently.
                </p>
              </div>

              {/* Right – Small neatly aligned image */}
              <div className="flex justify-center">
                <img
                  src="/dms-body.png"
                  alt="Digital document processing overview"
                  className="rounded-lg shadow-md w-64 md:w-72 lg:w-80 object-contain"
                />
              </div>

            </div>
          </section>

          {/* Why It Matters */}
          <section className="fade-section space-y-6">
            <h2 className="text-2xl font-semibold text-[#2d459c]">
              Why Document Management Matters
            </h2>
            <p className="text-gray-700 leading-relaxed">
              In immigration law, accuracy and organisation are everything. A
              missing document or incorrect version can delay or even jeopardise
              your application. That’s why our system ensures all your materials
              are up-to-date, traceable, and properly recorded throughout your
              case’s lifecycle.
            </p>
          </section>

          {/* Closing CTA */}
          <section className="fade-section text-center mt-12">
            <h2 className="text-2xl font-semibold text-[#2d459c] mb-4">
              Let Us Handle the Paperwork
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto mb-6">
              Whether you’re submitting a visa application or preparing for an
              appeal, our team ensures every document is accounted for and
              securely processed. With 1st Call UK, your case is in safe hands
              from start to finish.
            </p>

            <a
              href="/contact"
              className="inline-block bg-[#2d459c] hover:bg-[#22347a] text-white font-semibold py-3 px-8 rounded-md shadow-md transition duration-300"
            >
              Contact Our Team
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
