// import { defineConfig } from "vite";

// // https://vitejs.dev/config/
// export default defineConfig(({ }) => ({
//   server: {
//     host: true,
//     // port: 3000,
//   },
// }));

// import { defineConfig } from "vite";
// import { glob } from "glob";
// import injectHTML from "vite-plugin-html-inject";
// import FullReload from "vite-plugin-full-reload";
// import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// export default defineConfig(({ command }) => ({
//   root: 'src',
//   build: {
//     sourcemap: command === "serve", // Генерація sourcemap тільки в dev-режимі
//     rollupOptions: {
//       input: glob.sync("./src/*.html"), // Динамічний пошук HTML-файлів
//     },
//     outDir: "../dist", // Директорія для збірки
//   },
//   plugins: [
//     injectHTML(), // Автоматична вставка HTML
//     FullReload(["./src/**/*.html", "./src/**/*.scss"]), // Автоматичне перезавантаження
//     ViteImageOptimizer({
//       png: { quality: 70 },
//       jpeg: { quality: 70 },
//       webp: { quality: 70 },
//     }), // Оптимізація зображень
//   ],
//   server: {
//     host: true, // Дозвіл на зовнішні підключення
//     port: 3000, // Встановлення порту сервера
//     open: true, // Автоматичне відкриття браузера
//   },
// }));

// import { defineConfig } from "vite";
// import { glob } from "glob";
// import injectHTML from "vite-plugin-html-inject";
// import FullReload from "vite-plugin-full-reload";
// // import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// // https://vitejs.dev/config/
// export default defineConfig(({ command }) => ({
//   root: "src",
//   build: {
//     sourcemap: command === "serve",
//     rollupOptions: {
//       input: glob.sync("./src/*.html"),
//     },
//     outDir: "../dist",
//   },
//   plugins: [
//     injectHTML(),
//     FullReload(["./src/**/*.html", "./src/**/*.scss"]),
//     // ViteImageOptimizer({
//     //   exclude: /^sprite.svg$/, //  не оптимізовувати svg
//     //   png: { quality: 70 },
//     //   jpeg: { quality: 70 },
//     //   webp: { quality: 70 },
//     // }), // Оптимізація зображень
//   ],
//   server: {
//     host: true, // Дозвіл на зовнішні підключення
//     // port: 3000,
//   },
// }));
import { defineConfig } from "vite";
import { glob } from "glob";
import injectHTML from "vite-plugin-html-inject";
import FullReload from "vite-plugin-full-reload";

export default defineConfig({
  root: "src",
  build: {
    // sourcemap: command === "serve",
    outDir: "../dist",
    rollupOptions: {
      input: glob.sync("./src/*.html"),
    },
  },
  plugins: [injectHTML(), FullReload(["./src/**/*.html", "./src/**/*.scss"])],
  server: {
    host: true,
  },
});
