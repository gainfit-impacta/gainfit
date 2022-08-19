import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

const isCi = process.env.CI === "true";

// https://astro.build/config
export default defineConfig({
  site: "https://gainfit.vercel.app",

  integrations: [
    react(),
    compress({
      logger: isCi ? 1 : 2,
      css: {
        forceMediaMerge: false,
      },
      html: {
        minifyURLs: true,
        removeAttributeQuotes: true,
        removeComments: true,
        removeEmptyAttributes: true,
        useShortDoctype: true,
      },
      img: false,
      svg: false,
    }),
    robotsTxt({
      sitemap: false,
      host: "vercel.app",
      policy: [
        {
          userAgent: "*",
          allow: "/$",
          disallow: "/",
        },
      ],
    }),
  ],
});
