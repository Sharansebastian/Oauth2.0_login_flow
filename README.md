# Oauth2.0_login_flow
As my starting learning stage in IAM, i asked the claude to give me a project with as much i know. And claude gave me this project. A minimal web app that lets a user log in with GitHub (using OAuth 2.0) and displays their GitHub username and email after login — proving that to understand the full authorization code flow end to end.

# What you need before starting: 
A Windows or Mac computer, a GitHub account (free, sign up at github.com if you don't have one), and about 30–45 minutes. You do not need any prior coding experience — every click and every line is spelled out below. Just follow it top to bottom in order, and don't skip a step.

# Step 0 — Install the one tool you need: Node.js

Node.js is a free program that lets your computer run the code for this project.

- Open your web browser and go to nodejs.org
- You'll see a big green button — click the one labeled "LTS" (this means "long-term support," the stable version)
- It downloads a file. Once it's done downloading, click on it to open it
- An installer window opens. Click Next, then Next again, agree to the license, and keep clicking Next/Install until it finishes — the default settings are fine, you don't need to change anything
- Once it says, "Installation complete," click Finish
- In terminal window, type exactly this and press Enter:
  " node -v "
If it prints something like v20.11.0

# Step 1 — Create a folder for your project

- Still in that same terminal window, type each line below one at a time, pressing Enter after each:

 cd Desktop > mkdir oauth-project > cd oauth-project

# Step 2 — Set up the project

- Type this and press Enter:

   " npm init -y "

     This creates a small settings file for your project. You'll see a new file appear if you open the "oauth-project" folder on your Desktop.

- Now type this and press Enter, then wait — it may take a minute:

  " npm install express axios "

    This downloads two small free code libraries: express (lets your computer act as a simple web server) and axios (lets it send requests to GitHub)

# Step 3 — Register your OAuth app on GitHub
- Open your browser, go to github.com, and make sure you're logged in
- Click your profile picture (top-right corner) → Settings
- Scroll all the way down the left-hand menu and click Developer settings (it's near the bottom)
- Click OAuth Apps
- Click the green New OAuth App button
- Fill in the form exactly like this:
- Application name: My IAM Test App (or anything you like)
- Homepage URL: http://localhost:3000
- Authorization callback URL: http://localhost:3000/callback
- Click Register application
- On the next page, you'll see a Client ID — copy it somewhere safe (a notes app is fine)
- Click Generate a new client secret, then copy that Client Secret too. GitHub only shows it to you once, so grab it now.

# Step 4 — Write the code
- Open the "oauth-project" folder on your Desktop using File Explorer (Windows) or Finder (Mac)
- Right-click inside the folder → New → Text Document (Windows) or create a new file in a text editor (Mac — TextEdit works, just make sure "plain text" mode is on, found under Format menu)
- Name the file exactly: app.js (make sure it's not app.js.txt — on Windows, you may need to turn on "file name extensions" in the View tab of File Explorer to check this)
- Open app.js and paste in the code (the app.js code is uploaded in this repository) and save the file after making the changes mentioned in the comment line of the code.

# tep 5 — Run it
- Go back to your terminal window (the black window from Step 0). Make sure it still says you're inside the oauth-project folder — if unsure, type cd Desktop/oauth-project and press Enter
- Type this and press Enter:
  " node app.js "
- You should see the message: Server running! Go to http://localhost:3000/login in your browser
- Leave this terminal window open — closing it stops your server

# Step 6 — Login
- Open your browser and go to: http://localhost:3000/login
- GitHub will ask you to approve access for "My IAM Test App" — click Authorize
- You'll be redirected back and see a page showing your GitHub username, name, and a long access token printed on screen
- That's a live, working OAuth 2.0 flow you just built.

# Step 7 — See the security concept in action (the actual learning part)
- Right-click anywhere on that results page → Inspect (or press F12) to open your browser's Developer Tools, then click the Network tab, and reload the page (http://localhost:3000/login again) — watch it hop from your app, to GitHub, to /callback, and back. That hopping is the OAuth flow from Chapter 9, happening in front of you.
- Now go back to GitHub → Settings → Applications → Authorized OAuth Apps, find "My IAM Test App," and click Revoke
- Go to http://localhost:3000/login again and log in again — notice GitHub asks you to approve access again, because the old permission was cut off. This is the "revocation" concept from Chapter 9, and it's exactly how a company disables an ex-employee's access in Chapter 3's "Leaver" step — instantly cutting a permission off at the source.

# What this proves:
By the end, with hands-on proof, we understand: the authorization code flow, the role of scopes, the client/authorization server/resource server relationship, and why tokens (not passwords) are what gets passed around — all core OAuth/OIDC concepts that show up constantly in real IAM engineering and architecture work.

