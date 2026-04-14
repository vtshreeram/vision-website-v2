import type { Metadata } from "next";
import { Poppins } from "next/font/google";

// ** import css
import "./globals.css";

// ** import swiper css
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import NextTopLoader from "nextjs-toploader";
import { generateOrganizationSchema } from "@/lib/structured-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const url = "https://vision-website-2.vercel.app";
export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Visions Transport - Seamless Cross-Border Logistics (MY-SG)",
  description:
    "Visions Transport is your trusted partner for seamless cross-border logistics between Malaysia and Singapore. We offer bonded trucking, warehousing, and distribution solutions.",
  keywords: [
    "logistics",
    "transportation",
    "bonded truck services",
    "non-bonded truck services",
    "warehousing",
    "distribution",
    "cargo handling",
    "tail lift truck",
    "crane truck",
    "linehaul",
    "shuttle services",
    "last mile delivery",
    "leasing vehicle",
    "Malaysia logistics",
    "Singapore logistics",
    "custom logistics solutions",
    "Visions Transport",
  ],
  openGraph: {
    title: "Visions Transport - Quality, Service & Reliability in Logistics",
    description:
      "Visions Transport provides comprehensive logistics and transportation services, including bonded and non-bonded trucking, warehousing, and distribution throughout Malaysia and Singapore.",
    url,
    type: "website",
    images: [
      {
        url: `${url}/og-img.png`,
        width: 1200,
        height: 630,
        alt: "Visions Transport Logistics Fleet",
      },
    ],
    siteName: "Visions Transport",
  },
  alternates: {
    canonical: url,
  },
  twitter: {
    card: "summary_large_image",
    site: "@visionstransport",
    title: "Visions Transport - Logistics & Transportation",
    description:
      "Visions Transport delivers reliable logistics, bonded and non-bonded trucking, warehousing, and distribution services across Malaysia and Singapore.",
    images: [`${url}/og-img.png`],
  },
  other: {
    "Content-Security-Policy":
      "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https:; frame-src 'self' https://www.google.com; object-src 'none'; base-uri 'self'; form-action 'self';",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${poppins.className} antialiased bg-background`}>
        <NextTopLoader
          color="#FF0000"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #FF0000,0 0 5px #FF0000"
        />
        {children}
      </body>
    </html>
  );
}
