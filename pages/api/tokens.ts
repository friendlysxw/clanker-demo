import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { sort, page, type } = req.query;

  // 构造目标 URL，确保所有参数正确拼接
  const targetUrl = `https://www.clanker.world/api/tokens?sort=${sort}&page=${page}&type=${type}`;

  try {
    // 转发请求到目标接口
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: {
        ...req.headers, // 转发请求头
        host: undefined, // 避免传递 Host 头
      } as unknown as HeadersInit, // 避免类型错误
    });

    // 获取响应内容
    const contentType = response.headers.get("content-type");
    res.status(response.status); // 将状态码返回给客户端

    // 判断内容类型并处理响应
    if (contentType?.includes("application/json")) {
      const data = await response.json();
      res.json(data);
    } else {
      const text = await response.text();
      res.send(text);
    }
  } catch (error) {
    console.error("Error in API Proxy:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
}
