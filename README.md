<!DOCTYPE html>
<html>
<head>
  <title>AI Poster Generator</title>
  <style>
    body{
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 40px;
    }
    input{
      padding: 10px;
      width: 250px;
    }
    button{
      padding: 10px 20px;
      margin-left: 10px;
      cursor: pointer;
    }
    img{
      margin-top: 30px;
      max-width: 90%;
      height: auto;
    }
  </style>
</head>
<body>

  <h1>AI Poster Generator</h1>
  <p>Create advertisement posters using AI</p>

  <input id="prompt" placeholder="Enter poster idea">
  <button onclick="generatePoster()">Generate Poster</button>

  <br><br>

  <img id="poster" alt="Generated poster will appear here">

  <script>
    function generatePoster() {
      const prompt = document.getElementById("prompt").value.trim();
      if (!prompt) return;

      const url = "https://image.pollinations.ai/prompt/" + encodeURIComponent(prompt + " advertisement poster design");
      document.getElementById("poster").src = url;
    }
  </script>

</body>
</html>
