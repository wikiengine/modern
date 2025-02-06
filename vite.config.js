import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginBundleObfuscator from 'vite-plugin-bundle-obfuscator';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //난독화 옵션
    //vitePluginBundleObfuscator()
  ],
  root: "src",
  build: {
    outDir: "../",
  }
})
