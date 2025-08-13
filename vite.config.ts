import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths' // Path alias support from tsconfig.json
import svgr from 'vite-plugin-svgr' // SVG as React component
import viteCompression from 'vite-plugin-compression' // Gzip/Brotli compression
import { ReactComponent as Logo } from './logo.svg'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr(),
    viteCompression()
  ],
  server: {
    port: 3000,
    open: true
  },
  base: './', // Cloudflare Pages root path
  build: {
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})
