import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    compress({
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
  ],
});
