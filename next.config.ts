import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Compression and optimization
  compress: true,
  poweredByHeader: false,
  // Sass configuration to automatically import variables
  sassOptions: {
    includePaths: [path.join(process.cwd(), "src/blog-styles")],
    additionalData: `@use "default/variables" as *;`,
    silenceDeprecations: ["legacy-js-api", "import"],
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Find the sass-loader rule
    const sassRules = config.module.rules
      .find((rule: any) => rule.oneOf)
      ?.oneOf.filter((rule: any) => {
        return rule.test && rule.test.toString().includes("scss|sass");
      });

    if (sassRules) {
      sassRules.forEach((rule: any) => {
        const sassLoader = rule.use?.find((loader: any) =>
          loader.loader?.includes("sass-loader")
        );
        if (sassLoader) {
          sassLoader.options = {
            ...sassLoader.options,
            additionalData: `@use "default/variables" as *;`,
            sassOptions: {
              ...sassLoader.options?.sassOptions,
              includePaths: [path.join(process.cwd(), "src/blog-styles")],
              silenceDeprecations: ["legacy-js-api", "import"],
            },
          };
        }
      });
    }

    return config;
  },
};

export default nextConfig;
