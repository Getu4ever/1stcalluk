"use client";

import { useState } from "react";
import "./globals.css";
import Link from "next/link";
import Footer from "./components/Footer";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const isStudio = pathname?.startsWith("/studio");

  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-gray-900">
        {isStudio ? (
          <>{children}</>
        ) : (
          <>
        {/* ===== HEADER ===== */}
<header className="bg-[#2d459c] text-white py-8 shadow-lg relative z-50">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6">
    {/* Left — Logo & Contact */}
<div className="flex flex-col items-start space-y-4 translate-x-[-12px]">
  <Link href="/" className="block">
    <div className="w-[260px] h-[100px] relative rounded-xl shadow-md bg-white border border-white/40 overflow-hidden">
      <Image
        src="/1st-calluk-logo02.jpg"
        alt="1st Call UK Immigration Advisers Logo — go to homepage"
        fill
        priority
        className="object-contain p-2"
      />
    </div>
  </Link>


  <div className="hidden md:flex gap-4">
    <a
      href="tel:+441158453325"
      className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
    >
      📞 Call Us
    </a>
    <a
      href="mailto:info@karoldigital.co.uk"
      className="bg-white text-[#2d459c] font-semibold py-2 px-5 rounded-lg shadow hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2"
    >
      ✉️ Email Us
    </a>
  </div>
</div>


    {/* Desktop Nav */}
    <nav className="nav-menu hidden lg:flex items-center gap-6 xl:gap-8 text-sm xl:text-base font-medium whitespace-nowrap">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/team", label: "Our Team" },
        { href: "/reviews", label: "Reviews" },
        { href: "/blog", label: "Blog" },
        { href: "/dms", label: "DMS" },
        { href: "/media", label: "Media" },
        { href: "/contact", label: "Contact" },
      ].map(({ href, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`relative group transition-all duration-300 ${
              isActive ? "text-yellow-300" : "text-white"
            } hover:text-yellow-300`}
          >
            {label}
            <span
              className={`absolute left-0 -bottom-1 h-[3px] bg-yellow-300 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            ></span>
          </Link>
        );
      })}
    </nav>

    {/* Hamburger Button */}
    <button
      className="lg:hidden flex flex-col items-center justify-center space-y-1 focus:outline-none"
      aria-label="Toggle navigation"
      aria-expanded={menuOpen}
      onClick={() => setMenuOpen((v) => !v)}
    >
      <span
        className={`block h-0.5 w-7 bg-white transform transition duration-300 ${
          menuOpen ? "rotate-45 translate-y-2" : ""
        }`}
      />
      <span
        className={`block h-0.5 w-7 bg-white transition duration-300 ${
          menuOpen ? "opacity-0" : "opacity-100"
        }`}
      />
      <span
        className={`block h-0.5 w-7 bg-white transform transition duration-300 ${
          menuOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      />
    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`lg:hidden absolute left-0 right-0 w-full bg-[#2d459c] shadow-lg transition-[max-height,opacity] duration-300 overflow-hidden ${
      menuOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
    }`}
  >
    <nav className="flex flex-col px-6 py-5 space-y-4 text-base font-medium">
      {[
        { href: "/", label: "Home" },
        { href: "/about", label: "About" },
        { href: "/services", label: "Services" },
        { href: "/team", label: "Our Team" },
        { href: "/reviews", label: "Reviews" },
        { href: "/blog", label: "Blog" },
        { href: "/dms", label: "DMS" },
        { href: "/media", label: "Media" },
        { href: "/contact", label: "Contact" },
      ].map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-gray-200"
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </Link>
      ))}
      <div className="flex gap-3 pt-2">
        <a
          href="tel:+441158453325"
          className="bg-white text-[#2d459c] font-semibold py-1.5 px-4 rounded-md shadow hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(false)}
        >
          📞 Call
        </a>
        <a
          href="mailto:info@karoldigital.co.uk"
          className="bg-white text-[#2d459c] font-semibold py-1.5 px-4 rounded-md shadow hover:bg-gray-100 transition"
          onClick={() => setMenuOpen(false)}
        >
          ✉ Email
        </a>
      </div>
    </nav>
  </div>
</header>


            {/* ===== PAGE CONTENT ===== */}
            {/* GLOBAL FADE-IN ANIMATION */}

            <main>{children}</main>

            {/* ===== FOOTER & COPYRIGHT ===== */}
            <Footer />
            <div className="bg-black text-gray-400 text-center py-4 text-sm border-t border-gray-800">
              © {new Date().getFullYear()} 1st Call UK Immigration Services. All rights reserved.
            </div>

            {/* ===== CHATBASE AI ASSISTANT ===== */}
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(){
                  if(!window.chatbase || window.chatbase("getState")!=="initialized"){
                    window.chatbase=(...arguments)=>{
                      if(!window.chatbase.q){window.chatbase.q=[]}
                      window.chatbase.q.push(arguments)
                    };
                    window.chatbase=new Proxy(window.chatbase,{
                      get(target,prop){
                        if(prop==="q"){return target.q}
                        return(...args)=>target(prop,...args)
                      }
                    })
                  }
                  const onLoad=function(){
                    const script=document.createElement("script");
                    script.src="https://www.chatbase.co/embed.min.js";
                    script.id="BpVYDLxfQ4AwaPDDs5_zr";
                    script.domain="www.chatbase.co";
                    document.body.appendChild(script)
                  };
                  if(document.readyState==="complete"){onLoad()}
                  else{window.addEventListener("load",onLoad)}
                })();`,
              }}
            />
          </>
        )}

      </body>
    </html>
  );
}
