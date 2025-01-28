import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
          input: ['resources/js/app.jsx', 'resources/css/app.css'],
          refresh: true,
        }),
        react(),
      ],
      server: {
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: '172.17.22.230',
            protocol: 'http',
        },
        proxy: {
            '/cv-info': {
                target: 'http://172.17.22.230', // Ensure this matches APP_URL in .env
                changeOrigin: true,
                secure: false,
            },
        },
    },
    
});
