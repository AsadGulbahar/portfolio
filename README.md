# Asad Gulbahar — Portfolio

Personal portfolio website for **Asad Gulbahar**, Graduate QEA Engineer at Cognizant.  
Built with semantic HTML5 and plain CSS3 — no frameworks, no build tools, no dependencies.

---

## Live Preview

Open `portfolio.html` directly in any browser, or serve it locally (see below).

---

## Tech Stack

| Layer      | Technology          |
|------------|---------------------|
| Markup     | HTML5 (semantic)    |
| Styles     | CSS3 (custom props) |
| Fonts      | Google Fonts (CDN)  |
| Hosting    | GitHub Pages        |

---

## Project Structure

```
portfolio/
├── portfolio.html          # Main page
├── profile-photo.jpg       # Profile image (add your own)
├── supermarket-comparison.jpg
├── aviation-weather-app.jpg
├── qm-minus-system.jpg
└── README.md
```

---

## Local Development

No build step required. Just open the file:

```bash
# Option 1 — open directly
start portfolio.html        # Windows
open portfolio.html         # macOS

# Option 2 — serve with Python (avoids any CORS quirks)
python -m http.server 8080
# then visit http://localhost:8080/portfolio.html
```

---

## Git Workflow

This project uses **feature branches** for every change.  
The branching convention is: `feature/<short-description>`

### One-time setup

```bash
# 1. Initialise the repo
git init

# 2. Add all files
git add .

# 3. First commit
git commit -m "feat: initial portfolio — HTML structure and base CSS"

# 4. Rename default branch to main
git branch -M main

# 5. Link to your GitHub repo (replace URL with yours)
git remote add origin https://github.com/AsadGulbahar/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

### Everyday feature branch workflow

```bash
# --- Start a new feature ---
git checkout -b feature/<description>
# e.g. git checkout -b feature/update-hero-section

# --- Make your changes, then stage them ---
git add .
# or stage a specific file:
git add portfolio.html

# --- Commit with a descriptive message ---
git commit -m "feat: <what you changed>"

# --- Push the feature branch to GitHub ---
git push origin feature/<description>

# --- Open a Pull Request on GitHub, review, then merge ---

# --- After merging, switch back to main and pull ---
git checkout main
git pull origin main

# --- Delete the local feature branch (cleanup) ---
git branch -d feature/<description>
```

### Branch naming examples

| Change                        | Branch name                        |
|-------------------------------|------------------------------------|
| Header / hero redesign        | `feature/update-hero-section`      |
| Add new project card          | `feature/add-project-qm-minus`     |
| Fix contact form layout       | `fix/contact-form-mobile-layout`   |
| Improve accessibility         | `feature/a11y-improvements`        |
| Update skills list            | `feature/update-skills`            |

---

## Deploying to GitHub Pages

```bash
# Make sure you are on main and everything is pushed
git checkout main
git push origin main
```

Then on GitHub:
1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `/ (root)`
4. Click **Save**

Your site will be live at:  
`https://AsadGulbahar.github.io/portfolio/portfolio.html`

---

## Sections

| Section   | ID            | Description                              |
|-----------|---------------|------------------------------------------|
| Header    | `page-header` | Name, role, Cognizant badge, CTAs        |
| Hero      | `home`        | Short intro + profile photo              |
| About     | `about`       | Background and journey                   |
| Skills    | `skills`      | Frontend, backend, tools                 |
| Projects  | `projects`    | Three featured projects with detail      |
| Contact   | `contact`     | Contact form                             |
| Connect   | `sidebar`     | Social links and current status          |
| Footer    | `page-footer` | Copyright + quick nav                    |

---

## Customisation

All colours and fonts are set as CSS custom properties in `:root` at the top of the `<style>` block — edit them in one place to retheme the whole site.

```css
:root {
  --navy:  #0a0f1e;   /* page background      */
  --teal:  #00c2a8;   /* accent / brand colour */
  --white: #f0f4f8;   /* headings              */
  --slate: #8899aa;   /* body text             */
}
```

---

## License

© 2026 Asad Gulbahar. All rights reserved.
