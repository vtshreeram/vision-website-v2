/**
 * Structured Data (Schema.org) Utilities
 * Generates JSON-LD structured data for SEO
 */

const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_HOST_URL || "https://vision-website-2.vercel.app";

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Visions Transport",
    url: WEBSITE_URL,
    logo: `${WEBSITE_URL}/logo.png`,
    description:
      "Visions Transport is your trusted partner for seamless cross-border logistics between Malaysia and Singapore.",
    sameAs: [
      "https://www.facebook.com/visionstransport",
      "https://www.instagram.com/visionstransport",
      "https://www.linkedin.com/company/visionstransport",
      "https://www.twitter.com/visionstransport",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 2A-1 Jalan Kemuning Prima C33/C, Seksyen 33",
      addressLocality: "Kuala Lumpur",
      postalCode: "40400",
      addressCountry: "MY",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support",
      telephone: "+60351313898",
      email: "operation@visionstransport.com.my",
    },
  };
};

export const generateServiceSchema = (
  serviceName: string,
  serviceDescription: string,
  url: string
) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    url: `${WEBSITE_URL}${url}`,
    provider: {
      "@type": "Organization",
      name: "Visions Transport",
      url: WEBSITE_URL,
    },
  };
};

export const generateBreadcrumbSchema = (items: Array<{ name: string; url?: string }>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      ...(item.url && { item: item.url }),
    })),
  };
};

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Visions Transport",
    image: `${WEBSITE_URL}/logo.png`,
    description:
      "Logistics and transportation services including bonded trucking, warehousing, and distribution.",
    url: WEBSITE_URL,
    telephone: "+60351313898",
    email: "operation@visionstransport.com.my",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No 2A-1 Jalan Kemuning Prima C33/C, Seksyen 33",
      addressLocality: "Kuala Lumpur",
      postalCode: "40400",
      addressCountry: "MY",
    },
    areaServed: {
      "@type": "Country",
      name: "MY",
    },
    priceRange: "$$",
  };
};

export const generateFAQSchema = (
  faqs: Array<{ question: string; answer: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
};

export const generateArticleSchema = (article: {
  title: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    ...(article.image && { image: article.image }),
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Visions Transport",
      logo: {
        "@type": "ImageObject",
        url: `${WEBSITE_URL}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": article.url,
    },
  };
};
