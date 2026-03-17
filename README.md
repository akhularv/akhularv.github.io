# Akhul Arvind Portfolio

Static portfolio site for Akhul Arvind, focused on computational neurobiology, neural decoding, scientific tooling, and ML system design.

## Why It Is Built This Way

The site is intentionally lightweight and deployable as a plain static project. It uses a single HTML entry point with custom CSS and JavaScript so the portfolio can publish cleanly to GitHub Pages without a build step while still supporting richer interactive visuals and project overlays.

## Tech

- HTML5
- CSS3
- Vanilla JavaScript
- Static image assets

## Local Development

Serve the folder with any static file server. For example:

```bash
python3 -m http.server 8124
```

Then open `http://127.0.0.1:8124/`.

## Deployment

This project is ready for GitHub Pages as a static site:

1. Push the contents of this folder to a GitHub repository.
2. Set GitHub Pages to deploy from the repository root.
3. Keep the `.nojekyll` file so assets are served as-is.

## Customization

- Update copy and links in `index.html`
- Adjust visuals and layout in `styles.css`
- Edit interaction behavior and project modal content in `script.js`

## Future Expansion

The site is structured so additional project data, richer modal interactions, or external project links can be added without introducing a framework or build tooling.
