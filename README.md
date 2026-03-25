# Rayaan Portfolio

This is a Vite + React + TypeScript portfolio site.

## Local setup

Install dependencies first:

```bash
npm install
```

## Open it properly locally

This project is not meant to be opened by double-clicking the source `index.html` like a plain HTML file.

Use one of these two correct options instead.

### Option 1: Run the development server

This is the best option while editing the project.

```bash
npm run dev
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:8080
```

### Option 2: Build it, then open the built file

If you want to open it without running a dev server:

```bash
npm run build
```

After that, open:

`dist/index.html`

That built file works because the project is configured to use relative asset paths.

## Available scripts

```bash
npm run dev
npm run build
npm run preview
npm run test
npm run lint
```

## GitHub Pages deployment

This repo is configured to deploy through GitHub Actions.

### What is already set up

1. The workflow builds the app with Vite.
2. The workflow deploys the built `dist` folder, not the raw source files.
3. The app uses `HashRouter`, which is safer for GitHub Pages.

### What you need to do

1. Push this project to a GitHub repository.
2. Make sure your main branch is named `main`.
3. In the GitHub repository settings, open `Pages`.
4. Set the source to `GitHub Actions`.
5. Push to `main` and wait for the workflow to finish.

### Your site URL

Your site will usually be available at:

```text
https://your-username.github.io/your-repo-name/
```

Because this app uses hash-based routing, routes will look like this:

```text
https://your-username.github.io/your-repo-name/#/
```

## Notes

1. If you change the code and want an updated static version, run `npm run build` again.
2. If GitHub Pages does not update immediately, check the `Actions` tab in your repository.
