import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import netlify from '@netlify/vite-plugin-tanstack-start'

const config = defineConfig({
  resolve: { tsconfigPaths: true }, // This allows us to use the `#` alias for `src` in our imports, e.g.import Navbar from '#/components/Navbar'
  plugins: [
    devtools(), // This adds the TanStack Devtools to our app, which you can open by pressing `ctrl + shift + d` in your browser
    netlify(), // This adds support for Netlify Functions, which you can use to create serverless API routes. See https://tanstack.com/start/docs/netlify for more details.
    tailwindcss(), // This adds support for Tailwind CSS, which you can use to style your app. See https://tanstack.com/start/docs/tailwind for more details.
    tanstackStart(),
    viteReact(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
})

export default config
