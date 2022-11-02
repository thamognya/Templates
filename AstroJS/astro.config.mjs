import { defineConfig } from "astro/config";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
import vue from "@astrojs/vue";

// https://astro.build/config
import svelte from "@astrojs/svelte";

// https://astro.build/config
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
import preact from "@astrojs/preact";

// https://astro.build/config
import lit from "@astrojs/lit";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
import deno from "@astrojs/deno";

// https://astro.build/config
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
import node from "@astrojs/node";

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  site: 'https://www.thamognya.com',
  integrations: [react(), vue(), svelte(), solidJs(), preact(), lit(), alpinejs(), tailwind({
    config: {
      path: './tailwind.config.cjs'
    },
    config: {
      applyBaseStyles: false
    }
  }), mdx(), compress(), sitemap(), prefetch({
    // Just add rel="prefetch" to any <a />
    throttle: 3
  }), image(), partytown({
    // Partytown should be ready to go with zero config. If you have an existing 3rd party script on your site, try adding the type="text/partytown" attribute:
    config: {
      debug: false
    }
  })],
  //    output: 'server',
  //    adapter: vercel()
});