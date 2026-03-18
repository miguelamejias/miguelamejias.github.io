import { defineConfig } from "astro/config";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/miguelamejias/miguelamejias.github.io",
  integrations: [icon(), sitemap()],
});
