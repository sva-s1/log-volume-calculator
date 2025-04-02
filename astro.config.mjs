// astro.config.mjs
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [
    tailwind({
      // Example: apply Tailwind in both development and production
      config: {
        applyBaseStyles: true,
      },
    }),
  ],
  // ...any other Astro config
});
