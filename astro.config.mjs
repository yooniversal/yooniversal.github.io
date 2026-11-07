// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { unified } from "@astrojs/markdown-remark";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { siteConfig } from "./src/config/site.ts";
import { codeThemes, codeDefaultColor } from "./src/config/code.ts";

const shikiConfig = /** @type {const} */ ({
  themes: codeThemes,
  defaultColor: codeDefaultColor,
});

export default defineConfig({
  site: siteConfig.siteUrl,
  trailingSlash: "always",
  redirects: {
    "/posts": "/",
  },
  integrations: [
    sitemap({
      filter: (page) => page !== new URL("/search/", siteConfig.siteUrl).toString(),
    }),
  ],
  markdown: {
    processor: unified({
      gfm: false,
      // Keep legacy time ranges such as 10:00~10:10 as literal text.
      remarkPlugins: [[remarkGfm, { singleTilde: false }], remarkMath],
      rehypePlugins: [rehypeSlug, rehypeKatex],
    }),
    shikiConfig,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
