const express = require("express");
const axios = require("axios");

const app = express();

// PASTE YOUR OWN VALUES HERE — from Step 3
const CLIENT_ID = "PASTE_YOUR_CLIENT_ID_HERE";
const CLIENT_SECRET = "PASTE_YOUR_CLIENT_SECRET_HERE";

// Step A: send the user to GitHub to log in and approve access
app.get("/login", (req, res) => {
  const redirectUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&scope=read:user`;
  res.redirect(redirectUrl);
});

// Step B: GitHub sends the user back here with a temporary "code"
app.get("/callback", async (req, res) => {
  const code = req.query.code;

  // Step C: exchange that code for a real access token
  const tokenResponse = await axios.post(
    "https://github.com/login/oauth/access_token",
    {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code: code,
    },
    { headers: { Accept: "application/json" } }
  );

  const accessToken = tokenResponse.data.access_token;

  // Step D: use the access token to ask GitHub who this user is
  const userResponse = await axios.get("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  res.send(
    `<h1>You're logged in!</h1>
     <p>Username: ${userResponse.data.login}</p>
     <p>Name: ${userResponse.data.name}</p>
     <p>This app never saw your GitHub password — only this token: ${accessToken}</p>`
  );
});

app.listen(3000, () => {
  console.log("Server running! Go to http://localhost:3000/login in your browser");
});