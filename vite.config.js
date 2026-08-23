import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages serves a project repo at https://<user>.github.io/<repo-name>/,
  // so every asset URL needs that repo name as a prefix. Set this to match
  // your repo's name exactly (slashes on both ends), e.g. '/vinz-barbershop/'.
  //
  // Exception: if you deploy to a USER/ORG page instead — a repo literally
  // named <yourusername>.github.io — set this back to '/'.
  base: '/vinz-barbershop/',
})
