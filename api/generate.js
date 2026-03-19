export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt" });
    }

    const finalPrompt = `${prompt}, professional advertisement poster, modern design, branding, high quality, bold text, marketing banner`;

    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(finalPrompt)}?width=1024&height=1024`;

    return res.status(200).json({ image: imageUrl });

  } catch (error) {
    return res.status(500).json({ error: "Failed to generate image" });
  }
}
