import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://egrami.github.io",
  base: "/riazibaz",
  trailingSlash: "always",
  integrations: [sitemap()],
});
