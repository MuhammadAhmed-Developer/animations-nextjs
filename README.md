# SPYLT - Protein Drink Landing Page

A modern, interactive landing page for SPYLT protein drinks built with Next.js and GSAP animations. Features smooth scrolling, dynamic flavor sections, and a fully responsive design.

![SPYLT Screenshot](./public/images/spylt.png)

**[Click here to visit the live web app](https://spylt-1pvi.vercel.app/)**

## Overview

SPYLT is a premium protein drink brand landing page showcasing 6 delicious flavors with smooth animations, interactive sections, and a modern user experience. The site features hero videos, flavor sliders, nutrition information, testimonials, and more.

## Technologies Used

### Core Framework
- **Next.js 16.1.1** - React framework with App Router
- **React 19.2.3** - UI library
- **TypeScript 5** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Custom Fonts** - Proxima Nova & Antonio (Google Fonts)
- **Lucide React** - Icon library

### Animation & Interactions
- **GSAP 3.14.2** - Professional animation library
- **@gsap/react** - React integration for GSAP
- **ScrollSmoother** - Smooth scrolling effects
- **ScrollTrigger** - Scroll-based animations

### Utilities
- **react-responsive** - Responsive design hooks
- **dayjs** - Date manipulation library

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## Features

- Smooth scroll animations powered by GSAP ScrollSmoother
- Interactive flavor slider showcasing 6 different flavors
- Hero section with video background
- Nutrition information display
- Benefits section with animated cards
- Testimonial carousel
- Fully responsive design
- Video pinning components
- Custom clip-path text effects
- Dynamic navigation bar

## Project Structure

```
macos-venv/
├── public/
│   ├── fonts/          # Custom font files
│   ├── images/         # Image assets
│   └── videos/         # Video assets
├── src/
│   ├── app/
│   │   ├── (root)/     # Main page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── FlavorSection.tsx
│   │   │   ├── NutritionSection.tsx
│   │   │   ├── BenefitSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── MessageSection.tsx
│   │   │   ├── FooterSection.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/     # Reusable components
│   │   ├── NavBar.tsx
│   │   ├── FlavorSlider.tsx
│   │   ├── FlavorTitle.tsx
│   │   ├── ClipPathTitle.tsx
│   │   └── VideoPinCompo.tsx
│   ├── hooks/          # Custom React hooks
│   │   └── userBreakpoint.ts
│   ├── libs/           # Library configurations
│   │   └── gsap.ts
│   └── constants/      # App constants
│       └── index.ts
├── next.config.ts
├── tsconfig.json
├── tailwind.config (via PostCSS)
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd macos-venv
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Key Sections

### Hero Section
- Video background
- Animated call-to-action
- Smooth scroll integration

### Flavor Section
- Interactive slider with 6 flavors
- Dynamic color themes
- Smooth transitions

### Nutrition Section
- Display of key nutrients
- Animated counters
- Visual data presentation

### Benefits Section
- Key product benefits
- Icon-based cards
- Scroll-triggered animations

### Testimonial Section
- Social proof display
- Video testimonials
- Carousel functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized images and videos
- Code splitting with Next.js
- Smooth 60fps animations
- Lazy loading components

## Deployment

The project is deployed on Vercel. [Click here to visit the live web app](https://spylt-1pvi.vercel.app/)

To deploy your own version:

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure environment variables if needed
4. Deploy

Built with Next.js, React, TypeScript, GSAP, and Tailwind CSS
