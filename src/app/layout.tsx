import "./globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

export const metadata = {
  metadataBase: new URL("https://www.1stcallukimmigration.co.uk"),

  title: {
    default: "1st Call UK Immigration Services",
    template: "%s | 1st Call UK",
  },

  description:
    "Trusted UK immigration advisers in Nottingham offering expert support with visas, appeals, family and work routes.",

  robots: "index, follow",

  openGraph: {
    type: "website",
    siteName: "1st Call UK Immigration Services",
    url: "https://www.1stcallukimmigration.co.uk",
  },

  twitter: {
    card: "summary_large_image",
  },

  alternates: {
    canonical: "https://www.1stcallukimmigration.co.uk",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-gray-900">

        {/* HEADER — Now a client component */}
        <Header />

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />
        <div className="bg-black text-gray-400 text-center py-4 text-sm border-t border-gray-800">
          © {new Date().getFullYear()} 1st Call UK Immigration Services. All rights reserved.
        </div>

        {/* ===== ORGANISATION SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "1st Call UK Immigration Services",
              "url": "https://1stcalluk.com",
              "logo": "https://1stcalluk.com/1st-calluk-logo02.jpg",
              "image": "https://1stcalluk.com/immigration-law-team.png",
              "telephone": "+441158453325",
              "email": "info@karoldigital.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "25 St James's St",
                "addressLocality": "Nottingham",
                "addressRegion": "Nottinghamshire",
                "postalCode": "NG1 6FH",
                "addressCountry": "GB",
              },
              "priceRange": "££",
              "description":
                "Specialist UK immigration lawyers based in Nottingham offering expert advice on visas, appeals, asylum, family visas, sponsor licences and judicial reviews.",
              "sameAs": [
                "https://facebook.com",
                "https://linkedin.com",
                "https://www.google.com/maps",
              ],
            }),
          }}
        />

        {/* ===== WEBSITE SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "1st Call UK Immigration Services",
              "url": "https://1stcalluk.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://1stcalluk.com/?s={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ===== HOMEPAGE BREADCRUMB SCHEMA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://1stcalluk.com",
                },
              ],
            }),
          }}
        />

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
      </body>
    </html>
  );
}
