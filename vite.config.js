import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
      proxy: {
        '/v2': {
          target: 'http://ankushjaiswal.ap-south-1.elasticbeanstalk.com',
          changeOrigin: true,
          // rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
});