import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'; // SWC versiyasi to'g'ri ekan
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
