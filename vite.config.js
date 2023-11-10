import { fileURLToPath, URL } from "node:url";
import { resolve } from "path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    //需要用到的插件数组
    vue(),
  ],
  resolve: {
    // 定义项目路径别名，这样可以在引入文件时，以属性值为起点。
    // 例如你 import 导入使用的时候 from 的路径就可以更改成 `@/view/home `
    alias: {
      "@": resolve(__dirname, "src"),
    },
    // import 导入时想要省略的扩展名列表
    extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
  },
  //静态资源服务的文件夹
  publicDir: "public",
  base: "./",
  //静态资源处理
  assetsInclude: "",
  //控制台输出的级别 info 、warn、error、silent
  logLevel: "info",
  server: {
    host: "localhost", // 启动后浏览器窗口输入地址就可以进行访问
    port: 8080, // 端口号
    open: true, //是否自动打开浏览器
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    https: false, //是否支持http2 如果配置成true 会打开https://localhost:8080;
    strictPort: true, //严格的端口号，如果true，端口号被占用时会直接退出
    hmr: true, // 开启热更新
    proxy: {
      // 反向代理配置
      "/api": {
        // 配置接口调用目标地址
        target: "https://wymx.github.io",
        // 当进行代理时，在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        changeOrigin: true,
        // 替换target中的请求地址，请求时以 /api 开头
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  build: {
    // 最终构建的浏览器兼容目标，类型：string | string[]
    target: "",
    //指定输出路径
    outDir: "dist",
    //生成静态资源的存放的路径
    assetsDir: "assets",
    // 设置资源阈值，小于该值将内联为 base64 编码，避免额外的 http 请求
    assetsInlineLimit: 4096,
    //启用/禁用 CSS 代码拆分，如果有设置build.lib，build.cssCodeSplit 会默认为 false，
    //false 的话会将项目中的所以 css 提取到一个 css 文件中
    cssCodeSplit: true,
    // 构建后是否生成 source map 文件, boolean | 'inline' | 'hidden'
    sourcemap: false,
    //自定义底层的 Rollup 打包配置
    rollupOptions: {
      // 可以配置多个，表示多入口
      input: {
        index: resolve(__dirname, "index.html"),
      },
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/name-[hash].[ext]",
      },
    },
    // 禁用将构建后的文件写入磁盘
    write: false,
    //默认情况下，若 outDir 在 root 目录下，则 Vite 会在构建时清空该目录。
    emptyOutDir: true,
    //chunk 大小警告的限制
    chunkSizeWarningLimit: 500,
  },
});
