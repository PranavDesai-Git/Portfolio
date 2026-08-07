import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { pageReorderVitePlugin } from './scripts/reorder-pages.js'
import { sitemapPlugin } from './scripts/sitemap-plugin.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), ViteYaml(), pageReorderVitePlugin(), sitemapPlugin()],
  server: {
    proxy: {
      '/api/github-contributions': {
        target: 'https://github-contributions.vercel.app/api/v1/PranavDesai-Git',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/github-contributions/, '')
      }
    }
  }
})


