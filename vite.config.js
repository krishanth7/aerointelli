import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact.html'),
        ras: resolve(__dirname, 'Technology/RAS.html'),
        privacy: resolve(__dirname, 'legal/privacy-policy.html'),
        terms: resolve(__dirname, 'legal/terms-and-conditions.html'),
        cookie: resolve(__dirname, 'legal/cookie-policy.html'),
        disclaimer: resolve(__dirname, 'legal/disclaimer.html'),
        refund: resolve(__dirname, 'legal/refund-policy.html'),
        shipping: resolve(__dirname, 'legal/shipping-policy.html')
      }
    }
  }
});
