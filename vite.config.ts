//import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig, PluginOption } from 'vite';
import fs from 'fs';
const appsDir = 'resources/apps';

const appDirs = fs.readdirSync(appsDir, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .map(dir => dir.name);

// Collect app.tsx and css files per app
const plugins:PluginOption=[];
for (const app of appDirs) {
    const basePath = `${appsDir}/${app}`;

    const jsPath = `${basePath}/js/app.tsx`;
    const cssPath = `${basePath}/css/app.css`;
    const ssrPath = `${basePath}/js/ssr.tsx`;
    if (fs.existsSync(jsPath)){
        plugins.push(laravel({input:cssPath?[jsPath,cssPath]:[jsPath],ssr:(fs.existsSync(ssrPath)?ssrPath:undefined)}));
    }
}
console.log(...plugins);
plugins.push(react()/*,
        tailwindcss()*/);
export default defineConfig({
    plugins,
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/lib/common/js'),
      'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
    },
  },
});
