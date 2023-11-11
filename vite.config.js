import { fileURLToPath, URL } from "node:url";

import path from "path"; //这个path用到了上面安装的@types/node
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default ({ mode }) => {
  const baseUrl = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  const dropConsole = Boolean(loadEnv(mode, process.cwd()).VITE_DROP_CONSOLE);

  return defineConfig({
    plugins: [
      //需要用到的插件数组
      vue(),
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        "@": path.resolve("./src"), // @代替src
        "#": path.resolve("./types"), // #代替types
      },
    },
    //静态资源服务的文件夹
    publicDir: "public",
    base: "./",
    //静态资源处理
    assetsInclude: "",
    //控制台输出的级别 info 、warn、error、silent
    logLevel: "info",
    server: {
      host: "0.0.0.0",
      port: 8000,
      open: true,
      cors: true,
      https: false,
      proxy: {
        "/api": {
          target: baseUrl,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__dirname, "index.html")
        },
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks: {
            vue: ["vue", "vue-router"],
          },
        },
      },
      minify: "terser",
      terserOptions: {
        compress: {
          //生产环境时移除console.log()
          drop_console: dropConsole,
          drop_debugger: dropConsole,
        },
      },
    },
  });
};
