export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": "Token r8_QGoTMxRTlpSLjno2kJrBaXRDCAuEM4H18NlnK",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "stability-ai/sdxl",
        input: {
          prompt: prompt + ", advertisement poster, high quality, text"
        }
      })
    });

    const data = await response.json();

    let imageUrl = null;

    if (data.urls && data.urls.get) {
      let result;
      do {
        await new Promise(r => setTimeout(r, 2000));
        const poll = await fetch(data.urls.get, {
          headers: {
            "Authorization": "Token r8_QGoTMxRTlpSLjno2kJrBaXRDCAuEM4H18NlnK"
          }
        });
        result = await poll.json();
      } while (result.status !== "succeeded");

      imageUrl = result.output[0];
    }

    res.status(200).json({ image: imageUrl });

  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
}
