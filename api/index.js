function getClientIP(req) {
  return req.headers['x-forwarded-for'] || req.socket.remoteAddress;
}

export default async (event) => {
  const { req,res } = event;
  const ip = getClientIP(req);
  const data = {
    msg: "hello world!",
    ip: ip,
  };
  res.status(200).json(data);
};
