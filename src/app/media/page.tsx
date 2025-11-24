"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function NewsPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".news-item");
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
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  // MEDIA IMAGES
  const mediaImages = [
    {
      src: "/news-africa.webp",
      alt: "Zimbabwean woman faces deportation - African news coverage",
    },
    {
      src: "/news-evening-post.webp",
      alt: "Protests grow in deportation row - Nottingham Evening Post",
    },
    {
      src: "/news-nottingham-post.webp",
      alt: "Women living the nightmare of deportation - Nottingham Post",
    },
    {
      src: "/news-uk.webp",
      alt: "Chinese battle 'a matter of life or death' - UK legal news",
    },
  ];

  // IMMIGRATION LAW NEWS CONTENT
  const newsPosts = [
    {
      category: "CASES, EVISAS, HIGH COURT",
      date: "October 2025",
      title:
        "Permission Granted for Judicial Review of the Home Office’s eVisa Policy",
      excerpt:
        "The High Court has granted permission to our clients, BSC and JS, to proceed with a judicial review challenge against the Home Office’s eVisa policy...",
      image: "/news1.jpg",
      link: "https://freemovement.org.uk/permission-granted-for-judicial-review-of-the-home-offices-evisa-policy/",
    },
    {
      category: "CHILDREN, CHILDREN IN CARE",
      date: "September 2025",
      title: "Briefing: Immigration and Nationality Options for Children in Care",
      excerpt:
        "Children who arrive in local authority care without lawful status face serious barriers later in life. This briefing outlines the available immigration options...",
      image: "/news2.jpg",
      link: "https://freemovement.org.uk/briefing-immigration-and-nationality-options-for-children-in-care/",
    },
    {
      category: "POINTS BASED SYSTEM, ILLEGAL WORKING",
      date: "August 2025",
      title:
        "Government Launches Consultation on the Prevention of Illegal Working",
      excerpt:
        "The Home Office has launched a six-week consultation seeking views on the expansion of right-to-work compliance measures across multiple sectors...",
      image: "/news3.jpg",
      link: "https://freemovement.org.uk/government-launches-consultation-on-the-prevention-of-illegal-working/",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 scroll-smooth">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* HERO SECTION */}
        <div className="relative w-full h-64 md:h-80 overflow-hidden">
          <Image
            src="/news-hero-new.png"
            alt="1st Call UK Immigration Services - In the News"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center animate-fade-in"
          />
        </div>

        {/* PAGE INTRO */}
        <div className="p-8 md:p-12 space-y-10">
          <h1 className="text-3xl font-bold text-[#2d459c] text-center">
            News & Legal Updates
          </h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments in UK immigration law,
            judicial reviews, and policy changes. Our team continually follows
            key cases, legal rulings, and Home Office updates that affect
            individuals, families, and businesses across the UK.
          </p>

          {/* IMMIGRATION NEWS GRID */}
          <div className="grid gap-10 md:grid-cols-3">
            {newsPosts.map((post, i) => (
              <div
                key={i}
                className="news-item bg-[#f9f9fb] rounded-2xl shadow-md hover:shadow-xl transition p-6 flex flex-col"
              >
                <div className="w-full h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm text-gray-500 mb-1">
                  {post.category}
                </span>
                <span className="text-xs text-gray-400 mb-2">{post.date}</span>
                <h2 className="text-xl font-semibold text-[#2d459c] mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-700 mb-6 flex-grow">{post.excerpt}</p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto bg-[#2d459c] text-white font-semibold py-2 px-5 rounded-md hover:bg-[#22347a] text-center transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            ))}
          </div>

          {/* MEDIA COVERAGE SECTION */}
          <div className="mt-20">
            {/* CLICKABLE HEADING THAT SCROLLS TO GALLERY */}
            <a href="#news-gallery">
              <h2 className="text-3xl font-bold text-[#2d459c] text-center mb-3 hover:underline cursor-pointer">
                We’re on the News
              </h2>
            </a>

            <p className="text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-10">
              Over the years, our immigration work has been featured across
              leading newspapers and media outlets. These stories highlight our
              commitment to defending vulnerable clients, challenging unlawful
              removal decisions, and shaping immigration law through landmark
              cases.
            </p>

            {/* NEWS GALLERY */}
            <section id="news-gallery">
              <div className="grid gap-10 md:grid-cols-2">
                {mediaImages.map((img, i) => (
                  <a
                    key={i}
                    href={img.src}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <div className="relative w-full h-80 rounded-xl overflow-hidden shadow-md group-hover:shadow-xl transition">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="50vw"
                        className="object-cover object-top group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <p className="text-center text-gray-600 mt-3 text-sm">
                      {img.alt}
                    </p>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
