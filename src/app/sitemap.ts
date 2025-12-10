const WEBSITE_HOST_URL = "https://vision-website-2.vercel.app";

export default async function sitemap() {
  // Main pages sitemap for Visions Transport
  const routes = [
    "/",
    "/about-us",
    "/services",
    "/gallery",
    "/contact-us",
  ].map((route) => {
    return {
      url: `${WEBSITE_HOST_URL}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency:
        route === "/" || route === "/gallery" ? "weekly" : "monthly",
      priority: route === "/" ? 1.0 : route === "/contact-us" ? 0.9 : 0.8,
    };
  });

  return [...routes];
}
