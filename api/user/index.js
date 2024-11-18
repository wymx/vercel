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
      const requestBody = req.body;
      if (req.url.startsWith("/login")) {
          const result = await login(requestBody);
          res.status(200).json(result);
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
};

async function login(requestBody) {
  const { data, error } = await supabase
  .from("users")
  .select("*")
  .eq("name", requestBody.name)
  .eq("password", requestBody.password)
  .single();
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

// 增
export const createProduct = async (createProduct) => {
  const { data, error } = await supabase
    .from("users")
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
    .from("users")
    .delete()
    .eq("fileId", fileId);
  if (error) {
    throw new Error(error.message);
  }
};

// 改
export const updateProduct = async ({ fileId, updateProduct }) => {
  const { data, error } = await supabase
    .from("users")
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
  const { data, error } = await supabase.from("users").select("*");
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
