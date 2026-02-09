// constants.ts

export const BASE_URL = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL || "https://visionstransport.com";
export const BLOG_URL = `${BASE_URL}/blog`;
export const META_IMAGE = `${BASE_URL}/seo.webp`;

export const SITE_NAME = "Visions Transport";
export const TWITTER_HANDLE = "@VisionsTransport"; // Replace with actual Twitter handle if available
export const LOCALE = "en_US";
export const TYPE = "website";

const title = `Logistics Insights & News || ${SITE_NAME}`;
const description =
   "Stay ahead of the curve with expert insights on logistics, supply chain management, and fleet technology. Discover how Visions Transport is redefining the industry with VizFleet.";

const keywords = [
   "Visions Transport",
   "Logistics Blog",
   "Supply Chain Insights",
   "Fleet Management",
   "Transportation Technology",
   "VizFleet",
   "Trucking News",
   "Shipping Trends",
].join(", ");

export const blogMetadata = {
   title,
   locale: LOCALE,
   type: TYPE,
   description,
   robots: "index, follow",
   alternates: { canonical: BLOG_URL },
   keywords,
   openGraph: {
      title,
      description,
      url: BLOG_URL,
      siteName: SITE_NAME,
      locale: LOCALE,
      type: TYPE,
      images: [{ url: META_IMAGE, alt: title }],
   },
   twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
      images: [{ url: META_IMAGE, alt: title }],
   },
};

export const blogJsonLd = {
   "@context": "https://schema.org/",
   "@type": "Blog",
   name: title,
   url: BLOG_URL,
   description: description,
   publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: {
         "@type": "ImageObject",
         url: META_IMAGE,
      },
   },
};
