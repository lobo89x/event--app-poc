import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages project site: https://<user>.github.io/event--app-poc/
const repositoryBase = '/event--app-poc/';

export default defineConfig({
  base: repositoryBase,
  plugins: [react()],
});
