# THIS IS KREATIVE — Agency Website

A bold, minimal agency website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## 📁 Project Structure

```
clivecoutet/
├── src/
│   └── app/
│       ├── page.tsx      # Main single-page application
│       ├── layout.tsx    # Root layout with metadata
│       └── globals.css   # Global styles + Tailwind
├── public/              # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── next.config.ts        # Next.js configuration
└── package.json
```

## 🎨 Brand Colors

| Element | Color |
|---------|-------|
| Background | `#FFFFFF` |
| "THIS IS" text | `#151515` |
| Gradient start (pink) | `#E31853` |
| Gradient mid (coral) | `#EF5B5A` |
| Gradient mid (orange) | `#F48C60` |
| Gradient end (yellow) | `#FFC25F` |

## 🌐 Netlify Deployment

### Option 1: Connect GitHub (Recommended)

1. Push this repo to GitHub if not already
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `.next`
6. Click "Deploy site"

### Option 2: CLI Deploy

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=.next
```

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag the `.next` folder to the drop zone

## ✨ Features

- 📱 Fully responsive (mobile-first)
- 🎨 Brand gradient on key elements
- ⚡ Smooth scroll navigation
- 📝 Netlify Forms contact form with service dropdown → emails to `clive@thisiskreative.io`
- 🎭 Bold typography with Inter font
- 🖼️ Portfolio grid with hover effects

## 📝 Sections

1. **Hero** — Bold tagline with gradient accent
2. **About** — Agency story and differentiators
3. **Services** — 7 service cards with gradient titles
4. **Portfolio** — 6 project cards with category tags
5. **Contact** — Form with service dropdown
6. **Footer** — Social links and copyright

## 📧 Contact Form Setup (Netlify Forms)

The contact form is powered by **Netlify Forms** and sends submissions to `clive@thisiskreative.io`.

**To enable email notifications:**
1. Go to **Netlify Dashboard** → select the `clivecoutet` site
2. Navigate to **Forms** → you should see the "contact" form listed
3. Click **Form notifications** → **Add notification** → **Email notification**
4. Set:
   - **Email to:** `clive@thisiskreative.io`
   - **Subject:** `New enquiry from THIS IS KREATIVE`
5. Save. Form submissions will now email you directly.

**Note:** Netlify auto-detects forms from the HTML during deploy — no extra config needed in the code.

## 📧 Contact

- **Owner:** Clive Coutet
- **Email:** `clive@thisiskreative.io` (form submissions only — not publicly displayed)
- **Domain:** `clivecoutet.netlify.app`

---

Built with ❤️ for THIS IS KREATIVE