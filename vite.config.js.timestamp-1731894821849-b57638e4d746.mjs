// vite.config.js
import path from "path";
import { defineConfig, loadEnv } from "file:///Users/UED/Github/vercel/node_modules/vite/dist/node/index.js";
import vue from "file:///Users/UED/Github/vercel/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/UED/Github/vercel";
var vite_config_default = ({ mode }) => {
  const baseUrl = loadEnv(mode, process.cwd()).VITE_BASE_URL;
  const dropConsole = Boolean(loadEnv(mode, process.cwd()).VITE_DROP_CONSOLE);
  return defineConfig({
    plugins: [
      //需要用到的插件数组
      vue()
    ],
    //这里进行配置别名
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        // @代替src
        "#": path.resolve("./types")
        // #代替types
      }
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
      port: 8e3,
      open: true,
      cors: true,
      https: false,
      proxy: {
        "/api": {
          target: baseUrl,
          changeOrigin: true,
          ws: true,
          rewrite: (path2) => path2.replace(/^\/api/, "")
        }
      }
    },
    build: {
      rollupOptions: {
        input: {
          index: path.resolve(__vite_injected_original_dirname, "index.html")
        },
        output: {
          chunkFileNames: "static/js/[name]-[hash].js",
          entryFileNames: "static/js/[name]-[hash].js",
          assetFileNames: "static/[ext]/[name]-[hash].[ext]",
          manualChunks: {
            vue: ["vue", "vue-router"]
          }
        }
      },
      minify: "terser",
      terserOptions: {
        compress: {
          //生产环境时移除console.log()
          drop_console: dropConsole,
          drop_debugger: dropConsole
        }
      }
    }
  });
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvVUVEL0dpdGh1Yi92ZXJjZWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9VRUQvR2l0aHViL3ZlcmNlbC92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvVUVEL0dpdGh1Yi92ZXJjZWwvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tIFwibm9kZTp1cmxcIjtcblxuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjsgLy9cdThGRDlcdTRFMkFwYXRoXHU3NTI4XHU1MjMwXHU0RTg2XHU0RTBBXHU5NzYyXHU1Qjg5XHU4OEM1XHU3Njg0QHR5cGVzL25vZGVcbmltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XG5pbXBvcnQgdnVlIGZyb20gXCJAdml0ZWpzL3BsdWdpbi12dWVcIjtcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT4ge1xuICBjb25zdCBiYXNlVXJsID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKS5WSVRFX0JBU0VfVVJMO1xuICBjb25zdCBkcm9wQ29uc29sZSA9IEJvb2xlYW4obG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKS5WSVRFX0RST1BfQ09OU09MRSk7XG5cbiAgcmV0dXJuIGRlZmluZUNvbmZpZyh7XG4gICAgcGx1Z2luczogW1xuICAgICAgLy9cdTk3MDBcdTg5ODFcdTc1MjhcdTUyMzBcdTc2ODRcdTYzRDJcdTRFRjZcdTY1NzBcdTdFQzRcbiAgICAgIHZ1ZSgpLFxuICAgIF0sXG4gICAgLy9cdThGRDlcdTkxQ0NcdThGREJcdTg4NENcdTkxNERcdTdGNkVcdTUyMkJcdTU0MERcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKFwiLi9zcmNcIiksIC8vIEBcdTRFRTNcdTY2RkZzcmNcbiAgICAgICAgXCIjXCI6IHBhdGgucmVzb2x2ZShcIi4vdHlwZXNcIiksIC8vICNcdTRFRTNcdTY2RkZ0eXBlc1xuICAgICAgfSxcbiAgICB9LFxuICAgIC8vXHU5NzU5XHU2MDAxXHU4RDQ0XHU2RTkwXHU2NzBEXHU1MkExXHU3Njg0XHU2NTg3XHU0RUY2XHU1OTM5XG4gICAgcHVibGljRGlyOiBcInB1YmxpY1wiLFxuICAgIGJhc2U6IFwiLi9cIixcbiAgICAvL1x1OTc1OVx1NjAwMVx1OEQ0NFx1NkU5MFx1NTkwNFx1NzQwNlxuICAgIGFzc2V0c0luY2x1ZGU6IFwiXCIsXG4gICAgLy9cdTYzQTdcdTUyMzZcdTUzRjBcdThGOTNcdTUxRkFcdTc2ODRcdTdFQTdcdTUyMkIgaW5mbyBcdTMwMDF3YXJuXHUzMDAxZXJyb3JcdTMwMDFzaWxlbnRcbiAgICBsb2dMZXZlbDogXCJpbmZvXCIsXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiBcIjAuMC4wLjBcIixcbiAgICAgIHBvcnQ6IDgwMDAsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgICAgY29yczogdHJ1ZSxcbiAgICAgIGh0dHBzOiBmYWxzZSxcbiAgICAgIHByb3h5OiB7XG4gICAgICAgIFwiL2FwaVwiOiB7XG4gICAgICAgICAgdGFyZ2V0OiBiYXNlVXJsLFxuICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcbiAgICAgICAgICB3czogdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpLywgXCJcIiksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICBpbmRleDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCJpbmRleC5odG1sXCIpXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGNodW5rRmlsZU5hbWVzOiBcInN0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzXCIsXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6IFwic3RhdGljL2pzL1tuYW1lXS1baGFzaF0uanNcIixcbiAgICAgICAgICBhc3NldEZpbGVOYW1lczogXCJzdGF0aWMvW2V4dF0vW25hbWVdLVtoYXNoXS5bZXh0XVwiLFxuICAgICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgICAgdnVlOiBbXCJ2dWVcIiwgXCJ2dWUtcm91dGVyXCJdLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgbWluaWZ5OiBcInRlcnNlclwiLFxuICAgICAgdGVyc2VyT3B0aW9uczoge1xuICAgICAgICBjb21wcmVzczoge1xuICAgICAgICAgIC8vXHU3NTFGXHU0RUE3XHU3M0FGXHU1ODgzXHU2NUY2XHU3OUZCXHU5NjY0Y29uc29sZS5sb2coKVxuICAgICAgICAgIGRyb3BfY29uc29sZTogZHJvcENvbnNvbGUsXG4gICAgICAgICAgZHJvcF9kZWJ1Z2dlcjogZHJvcENvbnNvbGUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xufTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFFQSxPQUFPLFVBQVU7QUFDakIsU0FBUyxjQUFjLGVBQWU7QUFDdEMsT0FBTyxTQUFTO0FBSmhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUMzQixRQUFNLFVBQVUsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUU7QUFDN0MsUUFBTSxjQUFjLFFBQVEsUUFBUSxNQUFNLFFBQVEsSUFBSSxDQUFDLEVBQUUsaUJBQWlCO0FBRTFFLFNBQU8sYUFBYTtBQUFBLElBQ2xCLFNBQVM7QUFBQTtBQUFBLE1BRVAsSUFBSTtBQUFBLElBQ047QUFBQTtBQUFBLElBRUEsU0FBUztBQUFBLE1BQ1AsT0FBTztBQUFBLFFBQ0wsS0FBSyxLQUFLLFFBQVEsT0FBTztBQUFBO0FBQUEsUUFDekIsS0FBSyxLQUFLLFFBQVEsU0FBUztBQUFBO0FBQUEsTUFDN0I7QUFBQSxJQUNGO0FBQUE7QUFBQSxJQUVBLFdBQVc7QUFBQSxJQUNYLE1BQU07QUFBQTtBQUFBLElBRU4sZUFBZTtBQUFBO0FBQUEsSUFFZixVQUFVO0FBQUEsSUFDVixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixjQUFjO0FBQUEsVUFDZCxJQUFJO0FBQUEsVUFDSixTQUFTLENBQUNBLFVBQVNBLE1BQUssUUFBUSxVQUFVLEVBQUU7QUFBQSxRQUM5QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxPQUFPO0FBQUEsTUFDTCxlQUFlO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTCxPQUFPLEtBQUssUUFBUSxrQ0FBVyxZQUFZO0FBQUEsUUFDN0M7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGdCQUFnQjtBQUFBLFVBQ2hCLGNBQWM7QUFBQSxZQUNaLEtBQUssQ0FBQyxPQUFPLFlBQVk7QUFBQSxVQUMzQjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixlQUFlO0FBQUEsUUFDYixVQUFVO0FBQUE7QUFBQSxVQUVSLGNBQWM7QUFBQSxVQUNkLGVBQWU7QUFBQSxRQUNqQjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRixDQUFDO0FBQ0g7IiwKICAibmFtZXMiOiBbInBhdGgiXQp9Cg==
