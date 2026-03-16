
<!DOCTYPE html>
<html>
<head>
<title>AI Poster Generator</title>

<style>
body{
font-family:Arial;
text-align:center;
background:#f4f4f4;
padding:40px;
}

input{
padding:10px;
width:250px;
margin:10px;
}

button{
padding:10px 20px;
background:#4CAF50;
color:white;
border:none;
border-radius:6px;
}

img{
margin-top:20px;
width:300px;
}
</style>
</head>

<body>

<h1>AI Poster Generator</h1>

<input id="prompt" placeholder="Enter poster idea">

<br>

<button onclick="generate()">Generate Poster</button>

<br>

<img id="poster">

<script>

function generate(){

let text=document.getElementById("prompt").value

let imageURL=
"https://image.pollinations.ai/prompt/"+text

document.getElementById("poster").src=imageURL

}

</script>

</body>
</html>
