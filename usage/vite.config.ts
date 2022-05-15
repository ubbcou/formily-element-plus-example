import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

function resolve(dir: string) {
  return path.resolve(__dirname, './', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    vue(),
    // commonjs(),
  ],
  resolve: {
    alias: {
      '@': resolve('./src'),
      // 'vue-demi': path.resolve(__dirname, './node_modules/vue-demi/lib/v3/index.mjs'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        sourcemap: true,
      },
      // external: ['@formily/vue', '@formily/core'],
      plugins: [
        nodeResolve(),
        // commonjs(),
      ],
    },
  },
  optimizeDeps: {
    exclude: ['@formily/vue', '@formily/core'],
    esbuildOptions: {
      // ex

    },
  },
})
