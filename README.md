# Passenger Counter

Simple passenger counting web app — a small counter used to track the number of passengers.

<!-- <img width="595" height="659" alt="image" src="https://github.com/user-attachments/assets/48ddf216-8309-4714-9b60-0e9810a30f07" /> -->
<img width="669" height="668" alt="{EB61E6BE-3E18-4FC3-9AC2-730B83392242}" src="https://github.com/user-attachments/assets/f966e204-ca35-4138-b8c6-815641dc9e83" />

## Overview

This is a minimal web application that acts as a passenger counter (a simple tally counter). It provides buttons to increase the passenger count and to save or otherwise persist the current value (implementation depends on the project files). The UI uses a background image (`station.jpg`) with a blurred effect applied via CSS.

**This application was built to practice and improve JavaScript skills.**

## Features

- Increment and decrement (if provided) passenger count via UI buttons.
- Simple, focused UI implemented with plain HTML, CSS and JavaScript.
- Background image with optional blur effect (configured in `index.css`).
- Tiny and easy to adapt for kiosks, demos or small internal tools.

## Files

- `index.html` — main HTML page (entry point).
- `index.css` — styling; contains the blurred background configuration and button styles.
- `index.js` - app logic (increment, save, etc.).
- `station.jpg` — background image used by the app.

(If some of these files are missing in this repository, they are expected to be added next to the README.)

## Installation & Run

No build tools required — the app is static. You can run it in two common ways:

1. Open locally:

   - Open `index.html` in a browser (double-click or `File → Open`).

2. Run a local static server (recommended for consistent behavior):

   - Using Python 3 built-in server:

     ```powershell
     cd path\to\passenger-counter-app
     python -m http.server 8000
     # then open http://localhost:8000 in your browser
     ```

   - Using Node.js `http-server` (if installed):

     ```powershell
     npx http-server . -p 8000
     ```

## Configuration & Customization

- Change the background image: replace `station.jpg` with another image (same filename or update `index.css`).
- Adjust blur strength in `index.css` — look for `filter: blur(...)` inside `body::before`.
- Add persistence: integrate `localStorage`, a backend API, or a small database depending on your needs.

## Contributing

Contributions are welcome. For small changes, open a branch, make the edits and create a pull request. Mention what you changed and why in the PR description.

## License

Will be added soon.

## Contact

If you need help adapting the app (adding persistence, analytics, or deployment instructions), open an issue or contact me directly.

---
