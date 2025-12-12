import { client } from "@/sanity/lib/client";
import { MetadataRoute } from "next";
import { SanityDocument } from "next-sanity";
import { siteConfig } from "@/config";

const POSTS_QUERY = `*[_type == "blog"] | order(createdBy desc){
  _id,
  title,
  slug,
  subtitle,
  "featureImg": featureImg.asset->url,
  date,
  "category": category->{
    name,
    _id,
    "slug": slug.current
  },
  post_views,
  read_time,
  "author": author->{
    author_name,
    "author_img": author_img.asset->url,
    author_url,
    author_designation,
    author_info,
    author_bio,
    username
  },
  "tags": tags[]->{
    name,
    "slug": slug.current
  },
  seo_description,
  seo_keywords,
}`;

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

// Helper function to normalize and sanitize slugs
function normalizeSlug(slug: any): string | null {
  // Handle different slug formats from Sanity
  if (!slug) return null;

  // If slug is an object with current property (common Sanity format)
  if (typeof slug === "object" && slug.current) {
    return slug.current;
  }

  // If slug is a string
  if (typeof slug === "string") {
    return slug;
  }

  return null;
}

// Helper function to prepare slug for URLs while preserving ampersands and other characters
function prepareSlugForUrl(slug: string): string {
  // Replace spaces with hyphens and normalize casing
  return slug.trim().toLowerCase().replace(/\s+/g, "-");
}

// Helper function to sanitize URLs for XML sitemap
function sanitizeForXml(url: string): string {
  // Replace special characters with XML entities
  return url
    .replace(/&/g, "&amp;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const options = { next: { revalidate: 30 } };
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  const websiteHostUrl = process.env.NEXT_PUBLIC_WEBSITE_URL || "https://vision-website-2.vercel.app";

  // Create a Set to track unique URLs
  const uniqueUrls = new Set<string>();

  const postRoute = posts
    .map((post) => {
      const normalizedSlug = normalizeSlug(post.slug);
      if (!normalizedSlug) return null;

      // Prepare slug for URL, preserving special characters like "&" for the actual URL
      const blogSlug = prepareSlugForUrl(normalizedSlug);
      if (!blogSlug) return null;

      // Create the URL with special characters preserved
      const url = `${websiteHostUrl}/blog/${blogSlug}`;

      // Sanitize URL for XML sitemap entry
      const xmlSafeUrl = sanitizeForXml(url);
      uniqueUrls.add(xmlSafeUrl);

      return {
        url: xmlSafeUrl, // Use XML-safe URL for the sitemap
        lastModified: new Date(post?.date || new Date()).toISOString(),
        changeFrequency: "daily" as ChangeFrequency,
      };
    })
    .filter((route): route is NonNullable<typeof route> => route !== null);

  // Define unique pages for sitemap
  const pageRoutes = [
    "/",
    "/about-us",
    "/services",
    "/sustainability",
    "/csr",
    "/blog",
    "/contact-us",
    // Careers
    "/careers",
    "/careers/Back-End-Developer",
    "/careers/Sales-And-Marketing-Specialist",
    "/careers/MERN-Stack-Developer",
    "/careers/Customer-Relationship-Management-(CRM)-Manager",
    "/careers/Sales-Business-Development-Manager",
    "/careers/React-Native-Developer",
    "/careers/UX-UI-Designer",
  ];

  const routes = pageRoutes.map((route) => {
    // Set appropriate change frequency and priority based on route
    let changeFrequency: ChangeFrequency = "monthly";
    let priority = 0.8;

    if (route === "/") {
      changeFrequency = "weekly";
      priority = 1.0;
    } else if (route === "/blog") {
      changeFrequency = "weekly";
      priority = 0.9;
    } else if (
      route === "/about-us" ||
      route === "/services" ||
      route === "/contact-us"
    ) {
      changeFrequency = "monthly";
      priority = 0.9;
    } else if (route === "/sustainability" || route === "/csr") {
      changeFrequency = "monthly";
      priority = 0.8;
    } else if (route === "/careers") {
      changeFrequency = "monthly";
      priority = 0.7;
    }

    return {
      url: sanitizeForXml(`${websiteHostUrl}${route}`),
      lastModified: new Date().toISOString(),
      changeFrequency,
      priority,
    };
  });

  const allRoutes = [...routes, ...postRoute];
  return allRoutes;
}
