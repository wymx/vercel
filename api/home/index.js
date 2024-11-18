const { createProxyMiddleware } = require("http-proxy-middleware");

export default async (req, res) => {
  let target = "";
  console.log(req.url);
  const data = {
    msg: "Hello world!2222",
  };
  res.status(200).json(data);

};
