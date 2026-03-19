export default async function handler(req, res) {
  try {
    const { prompt } = req.body;

    // STEP 1: Start prediction
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        "Authorization": "Token r8_E4NW99CrFZBNJUnbKdertcvwKnloGvY0oS5Cf",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        version: "a9758cbf9b2d8c8e9f8b0e7c8e3f7c6f0d7c1c6b5e4a3f2d1c0b9a8e7f6d5c4b",
        input: {
          prompt:
        }prompt + ", professional advertisement poster, bold typography, modern design, branding, high contrast, centered text, marketing poster, realistic"
        }
      })
    });

    const data = await response.json();

    // STEP 2: Poll until done
    let result;
    do {
      await new Promise(r => setTimeout(r, 2000));

      const poll = await fetch(data.urls.get, {
        headers: {
          "Authorization": "Token r8_E4NW99CrFZBNJUnbKdertcvwKnloGvY0oS5Cf"
        }
      });

      result = await poll.json();

    } while (result.status !== "succeeded");

    // STEP 3: Send image back
    res.status(200).json({
      image: result.output[0]
    });

  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
}
