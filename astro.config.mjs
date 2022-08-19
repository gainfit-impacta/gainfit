import { defineConfig } from "astro/config";
import react from "@astrojs/react";

/**
 * @type {import('astro/config').AstroUserConfig}
 * @see {@link https://astro.build/config}
 */
export default defineConfig({
  integrations: [react()],
});
