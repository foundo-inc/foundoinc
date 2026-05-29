# Foundo Project Structure

## Overview
Foundo is a fully Next.js 15 application with no src/ folder nesting. All root-level directories are at the project root for maximum clarity and accessibility.

## Directory Structure

```
foundo/
├── app/                           # Next.js App Router
│   ├── layout.tsx                 # Root layout with Providers
│   ├── page.tsx                   # Home page
│   ├── providers.tsx              # Client-side Redux, React Query, Toast providers
│   ├── global-error.tsx           # Global error handler
│   ├── not-found.tsx              # 404 page
│   ├── about/page.tsx             # About page
│   ├── contact/page.tsx           # Contact page
│   ├── pricing/page.tsx           # Pricing page
│   ├── faq/page.tsx               # FAQ page
│   ├── terms-of-service/page.tsx  # Terms page
│   └── privacy-policy/page.tsx    # Privacy page
│
├── sections/                      # Page sections and layouts
│   ├── index.ts                   # Barrel export for all sections
│   ├── HeroSection.tsx
│   ├── StatsSection.tsx
│   ├── ComparisonSection.tsx
│   ├── PricingSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── ContactSection.tsx
│   └── ... (18 total section components)
│
├── components/                    # Reusable UI components
│   ├── index.ts                   # Barrel export
│   ├── Navbar.tsx                 # Navigation bar
│   ├── Footer.tsx                 # Footer component
│   ├── FileUpload.tsx             # File upload component
│   ├── StatePricingModal.tsx      # State-based pricing modal
│   ├── WhatsAppPopup.tsx          # WhatsApp integration
│   ├── NavLink.tsx                # Navigation link
│   └── ui/                        # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── dialog.tsx
│       └── ... (25+ shadcn components)
│
├── store/                         # Redux state management
│   ├── index.ts                   # Redux store setup
│   ├── slices/                    # Redux slices
│   │   ├── authSlice.ts
│   │   ├── checkoutSlice.ts
│   │   └── ...
│   └── ...
│
├── hooks/                         # Custom React hooks
│   ├── use-toast.ts               # Toast notifications
│   └── ...
│
├── lib/                           # Utility functions
│   ├── utils.ts                   # Helper utilities
│   ├── idb-storage.ts             # IndexedDB storage
│   └── ...
│
├── styles/                        # Global styles
│   └── globals.css                # Tailwind CSS imports and custom styles
│
├── public/                        # Static assets
│   ├── foundo-logo.svg
│   ├── foundo-logo-white.svg
│   ├── partners/
│   │   ├── mercury.svg
│   │   ├── airwallex.svg
│   │   ├── payoneer.svg
│   │   └── openphone.svg
│   ├── favicon.ico
│   └── robots.txt
│
├── next.config.ts                 # Next.js configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── postcss.config.js              # PostCSS configuration
├── eslint.config.js               # ESLint configuration
├── package.json                   # Project dependencies
└── README.md                       # Project documentation
```

## Key Changes from Previous Structure

### Removed
- `src/` folder - All content moved to root-level directories
- Old Vite files: `vite.config.ts`, `vitest.config.ts`
- Old TypeScript configs: `tsconfig.app.json`, `tsconfig.node.json`
- Testing tools: `@playwright/test`, `vitest`, `jsdom`, `@testing-library/*`
- Old packages: `lovable-tagger`, `react-router-dom`

### Moved
- `src/components/` → `components/` (6 core components)
- `src/components/*Section.tsx` → `sections/` (23 section components)
- `src/lib/` → `lib/`
- `src/hooks/` → `hooks/`
- `src/store/` → `store/`
- `src/assets/` → `public/`
- `src/index.css` → `styles/globals.css`

### Created
- `sections/index.ts` - Barrel export for all 23 sections
- `components/index.ts` - Barrel export for core components
- `app/` - Next.js App Router with all pages
- `app/providers.tsx` - Client-side provider wrapper
- `styles/` - Global CSS directory

## Import Paths

All imports use the `@/` alias resolved to the project root:

```typescript
// Components
import { Navbar } from '@/components'
import { HeroSection, PricingSection } from '@/sections'

// Core functionality
import { store } from '@/store'
import { useToast } from '@/hooks/use-toast'
import { cn } from '@/lib/utils'

// UI Components
import { Button } from '@/components/ui/button'

// Styles
import '@/styles/globals.css'

// Assets
<Image src="/foundo-logo.svg" alt="Logo" />
```

## Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Technology Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (25+ components)
- **State Management**: Redux Toolkit + Redux Persist
- **Data Fetching**: React Query (TanStack Query)
- **Forms**: React Hook Form + Zod validation
- **Database**: Supabase
- **Payments**: Stripe
- **Notifications**: Sonner toasts
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## File Organization Principles

1. **Sections** - Reusable page sections (23 components)
2. **Components** - Small, focused UI components (6 core + shadcn)
3. **Features** - Redux slices, hooks, utilities
4. **Styles** - Centralized in `styles/globals.css`
5. **Assets** - Static files served from `public/`

This flat structure provides maximum clarity and makes it easy to locate files and manage imports.
