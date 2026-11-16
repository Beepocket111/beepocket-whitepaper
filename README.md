# Beepocket Whitepaper Website

A clean, white-background English reading website for the **Beepocket AI Quantitative Trading Digital Asset Ecosystem Whitepaper V1.2**.

## Included

- Responsive single-page whitepaper layout with all 16 chapter anchors.
- Desktop sidebar contents and mobile drawer navigation.
- Official Beepocket Logo in the header.
- Formal Noto Sans / Noto Serif typography with a blue-purple brand palette.
- Reading progress, active chapter state, back-to-top control, and expandable strategy notes.
- Tokenomics table, release schedule, roadmap, official contract information, and risk disclosure.

## Run locally

```bash
npm install
npm run dev
```

The development server runs on port `3000`.

## Build for deployment

```bash
npm run build
```

The production output is generated in `dist/`.

## GitHub upload

Create a new GitHub repository, then upload the contents of this package to the repository root. Keep `package.json`, `package-lock.json`, `index.html`, `src/`, `public/`, and `dist/` together.

If using Git from a terminal:

```bash
git init
git add .
git commit -m "Add Beepocket whitepaper website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

Replace the repository URL with your own GitHub repository URL.

## Project information

- Network: BNB Smart Chain
- Chain ID: 56
- Token: BPC
- Total planned supply: 800,000,000 BPC
- Initial reference price: 0.001 USD
- Initial DEX: PancakeSwap

The website includes the source whitepaper's risk disclosure. It does not constitute investment advice or a guarantee of returns.
