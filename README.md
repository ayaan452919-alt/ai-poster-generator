
<!DOCTYPE html>
<html>
<head>
  <title>AI Poster Generator</title>
  <style>
    body{
      font-family: Arial;
      text-align: center;
      background: #f4f4f4;
      padding: 40px;
    }

    input{
      padding: 10px;
      width: 260px;
      margin: 10px;
    }

    button{
      padding: 10px 20px;
      margin: 5px;
      background: #4CAF50;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    img{
      margin-top: 20px;
      width: 320px;
      border-radius: 8px;
    }
  </style>
</head>
<body>

  <h1>AI Poster Generator</h1>
  <p>Create advertisement posters instantly using AI</p>

  <input id="prompt" placeholder="Enter poster idea">
  <br>
  <button onclick="generate()">Generate Poster</button>
  <button onclick="downloadPoster()">Download Poster</button>

  <br>
  <img id="poster" alt="Generated poster will appear here">

  <script>
    function generate() {
      let text = document.getElementById("prompt").value.trim();
      if (!text) return;

      let imageURL = "https://image.pollinations.ai/prompt/" + encodeURIComponent(text);
      document.getElementById("poster").src = imageURL;
    }

    function downloadPoster() {
      let image = document.getElementById("poster").src;
      if (!image) return;

      let link = document.createElement("a");
      link.href = image;
      link.download = "poster.png";
      link.click();
