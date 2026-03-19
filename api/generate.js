export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "No prompt" });
  }

  const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(
    prompt + ", advertisement poster, modern design, branding"
  )}`;

  res.status(200).json({ image: imageUrl });
}
