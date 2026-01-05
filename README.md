# Alixel - Professional IT Software House Website

A modern, professional website for Alixel IT software house built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Professional black-based color scheme with emerald accents
- **Responsive**: Fully responsive design that works on all devices
- **SEO Optimized**: Complete SEO setup with sitemap, robots.txt, and meta tags
- **Performance**: Optimized for speed with Next.js 14 and modern best practices
- **Animations**: Smooth animations and micro-interactions throughout
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation

## 📋 Pages Included

- **Homepage**: Hero section, services overview, testimonials, and CTA
- **About**: Company story, mission, values, and team profiles
- **Services**: Detailed service offerings with pricing and process
- **Portfolio**: Project showcase with case studies and results
- **Contact**: Contact form, office locations, and business information
- **Blog**: Articles about technology trends and company updates

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom design tokens
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Manrope
- **Animations**: CSS animations with Tailwind utilities

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or download the project**
   \`\`\`bash
   # If using git
   git clone <repository-url>
   cd alixel-website
   
   # Or download and extract the ZIP file
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
alixel-website/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog pages
│   ├── contact/           # Contact page
│   ├── portfolio/         # Portfolio page
│   ├── services/          # Services page
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with SEO
│   ├── not-found.tsx      # 404 error page
│   └── page.tsx           # Homepage
├── components/            # Reusable React components
│   ├── ui/               # shadcn/ui components
│   ├── navigation.tsx    # Main navigation
│   ├── footer.tsx        # Site footer
│   └── ...               # Feature-specific components
├── public/               # Static assets
│   ├── robots.txt        # SEO robots file
│   ├── sitemap.xml       # SEO sitemap
│   ├── manifest.json     # PWA manifest
│   └── ...               # Images and icons
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
└── README.md            # This file
\`\`\`

## 🎨 Customization

### Colors
The website uses a professional color scheme defined in `app/globals.css`:
- **Primary**: Slate Gray (#1F2937)
- **Accent**: Emerald (#059669)
- **Neutrals**: White, Light Gray, Dark Gray

To customize colors, update the CSS custom properties in the `:root` section.

### Content
Update the following files to customize content:
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content
- `components/` - Individual component content

### Images
Replace placeholder images in the `public/` directory with your own:
- Team member photos
- Project screenshots
- Company logos
- Blog post images

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   \`\`\`bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   \`\`\`

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure domain: alixel.xyz
   - Deploy automatically

### Deploy to Other Platforms

1. **Build the project**
   \`\`\`bash
   npm run build
   \`\`\`

2. **Start production server**
   \`\`\`bash
   npm start
   \`\`\`

## 📊 SEO & Analytics

The website includes:
- **Sitemap**: `/sitemap.xml`
- **Robots.txt**: `/robots.txt`
- **Meta tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Schema markup**: Structured data for search engines

To add analytics:
1. Add Google Analytics or other tracking codes to `app/layout.tsx`
2. Update verification codes in the metadata

## 🔧 Development Commands

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
\`\`\`

## 📝 Environment Variables

Create a `.env.local` file for environment-specific variables:

\`\`\`env
# Add any API keys or configuration here
NEXT_PUBLIC_SITE_URL=https://alixel.xyz
\`\`\`

## 🤝 Support

For support or questions:
- Email: support@alixel.xyz
- Website: [alixel.xyz](https://alixel.xyz)

## 📄 License

This project is proprietary to Alixel. All rights reserved.

---

Built with ❤️ by the Alixel team
