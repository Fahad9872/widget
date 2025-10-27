import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: './src/widget/index.tsx',
      name: 'MyWidget',
      fileName: 'widget',
    },
    rollupOptions: {
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    cssCodeSplit: false, // CSS can still be bundled if desired
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'), // fixes ReferenceError
  },
});
