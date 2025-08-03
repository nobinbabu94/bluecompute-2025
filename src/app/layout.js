import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/navbar/Footer";
import { constructMetadata } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
              "name": "Bluecompute",
              "url": "https://bluecompute.com",
              "logo": "https://bluecompute.com/logo.png",
              "description": "Leading IT solutions provider offering innovative technology services",
              "address": {
                "@type": "PostalAddress968 NORFOLK SQ Norfolk  VA , 23502 ",
                "streetAddress": "4643 Holycon Circle San Jose CA.",
                "addressLocality": "Holycon Circle",
                "addressRegion": "San Jose ",
                "postalCode": "95136",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "408-242-0283",
                "contactType": "customer service"
              },
              "sameAs": [
                // "https://twitter.com/yourcompany",
                "https://linkedin.com/company/bluecomputeltd",
                // "https://github.com/yourcompany"
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
