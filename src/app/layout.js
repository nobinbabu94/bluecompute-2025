import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import { constructMetadata, generateViewport } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = generateViewport();

export const metadata = constructMetadata()


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {/* Preload critical resources */}
        <link rel="preload" href="/logo.png" as="image" />
        {/* Additional meta tags  */}
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bluecompute", // ← Change this to your actual company name
      "url": "https://bluecompute.com",
      "logo": "https://bluecompute.com/logo.png",
      "description": "Leading IT solutions provider offering innovative technology services",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4643 Holycon Circle", // ← Fixed: removed the extra text
        "addressLocality": "San Jose",
        "addressRegion": "CA",
        "postalCode": "95136",
        "addressCountry": "US"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "408-242-0283",
        "contactType": "customer service"
      },
      "sameAs": [
        "https://linkedin.com/company/bluecomputeltd"
      ]
    })
  }}
/>
      </head>
      <body
        className={` antialiased`}
      >
        <main className=" w-full  mt-20">
          <Navbar />
          {/* <div
            className={`lg:z-40 z-40  md:right-0 md:-top-full  lg:-top-96 md:pr-2 md:flex items-center justify-center 
                    }`}
            style={{
              transition: 'opacity 1s ease-in-out', 
            }}
          >
          </div> */}

          <div className="">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
