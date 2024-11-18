const { createProxyMiddleware } = require("http-proxy-middleware");

export default async (req, res) => {
  let target = "";
  console.log(req.url);
  // 代理目标地址
  // 这里使用 backend 主要用于区分 vercel serverless 的 api 路径
  if (req.url.startsWith("/api")) {
    target = "http://localhost:3001";
  }
  // console.log(target, "11111111111");

//   // 向前台写 cookie
//   res.writeHead(200, {
//     "Set-Cookie": "l=a123456;Path=/;Domain=www.proxy2.com;HttpOnly", // HttpOnly：脚本无法读取
//   });

  // 创建代理对象并转发请求
  // var specificProxy = createProxyMiddleware({
  //   target,
  //   changeOrigin: true,
  //   pathRewrite: {
  //     "^/api/": "/",
  //   },
  // });

// // 代理函数
// const proxyHandler = async (req, res) => {
//   try {
//     // 代理请求到目标地址
//    const aaa = await specificProxy(req, res);
//    console.log("33333333",aaa);
//   } catch (error) {
//     console.error('代理请求出错:', error);
//     res.status(500).send('代理请求出错');
//   }
// };


// console.log("2222222",proxyHandler);

  const data = {
    msg: "Hello world!2222",
  };
  res.status(200).json(data);

};
