import { createClient } from "@supabase/supabase-js";

// 创建 Supabase 客户端
const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_KEY
);

export default async (req, res) => {

  if (req.method === "POST") {
    try {
      // 解析请求体中的文件
      const imageInfo = req.body.data;
      const result = await upFileImageKit(imageInfo);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

async function upFileImageKit(imageInfo) {

  // 处理文件上传逻辑
  const { fileId, name, size, url, fileType, height, width, thumbnailUrl } =
    imageInfo;
  const { data, error } = await supabase
    .from("blogImg")
    .insert({
      fileId:fileId,
      name: name,
      size: size,
      url: url,
      fileType: fileType,
      height: height,
      width: width,
      thumbnailUrl: thumbnailUrl,
    })
    .select();
  if (error) {
    throw new Error(error.message);
  }
  return data[0];
}

// 增
export const createProduct = async (createProduct) => {
  const { data, error } = await supabase
    .from("blogImg")
    .insert([createProduct])
    .select()
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// 删
export const deleteProduct = async (fileId) => {
  const { error } = await supabase
    .from("blogImg")
    .delete()
    .eq("fileId", fileId);
  if (error) {
    throw new Error(error.message);
  }
};

// 改
export const updateProduct = async ({ fileId, updateProduct }) => {
  const { data, error } = await supabase
    .from("blogImg")
    .update(updateProduct)
    .eq("fileId", fileId)
    .select()
    .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
};

// 查
export const getProducts = async () => {
  const { data, error } = await supabase.from("blogImg").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
