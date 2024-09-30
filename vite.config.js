import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
// base: '/les-aiguilles-du-baron/',
// pour la vrai version :
// base: '/',

export default defineConfig({
  base: '/',
  plugins: [react()],
});
