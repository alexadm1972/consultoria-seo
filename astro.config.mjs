import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://insights.consultoriaknowhow2020.com.br",
  integrations: [sitemap()],
});

