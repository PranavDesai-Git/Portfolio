import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import ViteYaml from '@modyfi/vite-plugin-yaml'
import { pageReorderVitePlugin } from './scripts/reorder-pages.js'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte(), ViteYaml(), pageReorderVitePlugin()],
})


