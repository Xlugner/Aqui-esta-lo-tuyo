# Tech Stack & Build System

## Core Technologies

### Framework & Runtime
- **Astro 5.15.9**: Static site generator with server-side rendering capability
- **Node.js**: Runtime (v18+)
- **TypeScript 5.6**: Type-safe JavaScript

### UI & Styling
- **React 18.3**: Interactive components (islands architecture)
- **Tailwind CSS 3.4**: Utility-first CSS framework
- **@astrojs/tailwind**: Astro integration for Tailwind

### State Management
- **Nanostores 1.1**: Lightweight state management
- **@nanostores/react**: React bindings for Nanostores

### Backend Integration
- **Supabase**: PostgreSQL database, authentication, and storage
- **@supabase/supabase-js 2.94**: Supabase client library

### Server Adapter
- **@astrojs/node 9.5.3**: Node.js adapter for server-side rendering
- **@astrojs/react 3.6.2**: React integration for Astro

## Build & Development Commands

```bash
# Development
npm run dev          # Start dev server (http://localhost:3000)

# Production
npm run build        # Build for production
npm run preview      # Preview production build locally

# Installation
npm install          # Install dependencies
```

## Project Configuration

### Astro Config (`astro.config.mjs`)
- Output mode: `server` (SSR enabled)
- Adapter: Node.js standalone
- Integrations: React, Tailwind CSS
- Dev server port: 3000

### TypeScript Config (`tsconfig.json`)
- Extends: `astro/tsconfigs/strict`
- JSX: React JSX transform
- Strict type checking enabled

## Environment Variables

Required variables in `.env`:
- `PUBLIC_SUPABASE_URL`: Supabase project URL
- `PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key

Optional variables:
- `PUBLIC_WHATSAPP_NUMBER`: WhatsApp contact number
- `PUBLIC_STORE_NAME`: Store display name
- `PUBLIC_STORE_DESCRIPTION`: Store description
- `PUBLIC_STORE_EMAIL`: Store contact email

## Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| astro | ^5.15.9 | Framework |
| react | ^18.3.1 | UI components |
| tailwindcss | ^3.4.0 | Styling |
| @supabase/supabase-js | ^2.94.0 | Database client |
| nanostores | ^1.1.0 | State management |
| typescript | ^5.6.0 | Type checking |

## Code Style & Conventions

- **Language**: TypeScript (strict mode)
- **Component Format**: `.astro` for static components, `.tsx` for interactive React components
- **Styling**: Tailwind CSS utility classes (no custom CSS unless necessary)
- **File Organization**: Components grouped by framework (astro/, react/, sections/)
- **Naming**: kebab-case for files, PascalCase for components

## Performance Considerations

- Astro renders static HTML by default (fast)
- React components are hydrated only when needed (islands architecture)
- Images should be optimized before upload
- Strapi and Supabase calls should be cached where possible
- Use `getStrapiMedia()` and `getSupabaseImage()` helpers for image URLs
