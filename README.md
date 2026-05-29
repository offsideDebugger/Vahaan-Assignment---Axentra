# Axentra

A modern, interactive website for Axentra - a company transforming the global automotive and mobility ecosystem through innovative software solutions, educational programs, and green energy initiatives.

## About Axentra

Axentra envisions a future where cutting-edge technology and sustainability drive transformation in the automotive and mobility industry. The company focuses on:

- **Innovative Software Solutions** - Cutting-edge technology for mobility and automotive sectors
- **Educational Programs** - Inspiring the next generation of creators
- **Green Energy Initiatives** - Accelerating sustainable mobility adoption
- **Wearables Division** - Lifestyle-focused and performance-driven wearable products

## Project Overview

This is a [Next.js](https://nextjs.org) website built with [Bun](https://bun.sh) as the JavaScript runtime and package manager, featuring modern technologies to showcase Axentra's vision and services.

### Key Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Smooth Animations** - Motion animations for enhanced user experience
- **Interactive Components** - Engaging UI with React
- **Performance Optimized** - Next.js App Router with automatic code splitting

### Website Sections

- **Hero** - Eye-catching landing section with navigation
- **About** - Axentra's mission and vision
- **Services** - Core service offerings
- **Wearables** - Dedicated wearables product division
- **Innovation** - Innovation initiatives and achievements
- **Stats** - Key metrics and achievements
- **Contact** - Get in touch with Axentra

## Tech Stack

- **Runtime & Package Manager** - [Bun](https://bun.sh)
- **Framework** - [Next.js 16.2.6](https://nextjs.org)
- **UI Library** - [React 19.2.4](https://react.dev)
- **Styling** - [Tailwind CSS 4](https://tailwindcss.com)
- **Animations** - [Motion](https://motion.dev) for smooth transitions
- **Counters** - [react-countup](https://react-countup.js.org) for animated statistics
- **Language** - [TypeScript 5](https://www.typescriptlang.org)

## Getting Started

### Prerequisites
[Bun](https://bun.sh) (22.0.0 or higher recommended)

### Installation

```bash
bun install
```

### Development Server

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website in your browser. The page auto-updates as you edit files.

### Build & Production

Build for production:

```bash
bun run build
```

Start the production server:

```bash
bun start
```

### Linting

Run ESLint to check code quality:

```bash
bunbash
npm run lint
```

## Project Structure

```
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # Reusable components
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Wearables.tsx
│   ├── Innovation.tsx
│   ├── Stats.tsx
│   ├── Contact.tsx
│   └── StatsCard.tsx
├── public/             # Static assets
├── next.config.ts      # Next.js configuration
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## Development Notes

- The site uses Cormorant Garamond font from Google Fonts for typography
- Images are optimized with Next.js Image component
- Scroll-based navigation updates with backdrop blur effects
- Sections use full-screen height (h-screen) with grid layouts for responsive design

## Live Url

- [Axentra](https://axentra-sigma.vercel.app/)
