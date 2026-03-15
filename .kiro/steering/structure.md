# Project Structure

## Directory Organization

```
src/
├── components/              # Reusable UI components
│   ├── admin/              # Admin-specific components
│   │   └── AdminLayout.astro
│   ├── astro/              # Static Astro components
│   │   ├── BackButton.astro
│   │   ├── CallToAction.astro
│   │   ├── CategoryCarousel.astro
│   │   ├── FeaturedProducts.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── HeroSection.astro
│   │   ├── ProductCard.astro
│   │   └── ProductCardHorizontal.astro
│   ├── react/              # Interactive React components
│   │   ├── AddToCartButton.tsx
│   │   ├── Cart.tsx
│   │   ├── CartIcon.tsx
│   │   ├── CartStore.ts    # Nanostores state management
│   │   ├── CartSummary.tsx
│   │   ├── CartWrapper.tsx
│   │   ├── CheckoutForm.tsx
│   │   ├── FloatingButton.tsx
│   │   ├── MobileMenu.tsx
│   │   ├── ProductGallery.tsx
│   │   └── QuantitySelector.tsx
│   └── sections/           # Page section components
│       └── HeroBanner.tsx
├── layouts/                # Page layout templates
├── lib/                    # Utilities and integrations
│   ├── admin-auth.ts       # Admin authentication logic
│   ├── supabase.ts         # Supabase database client & helpers
│   └── types.ts            # TypeScript type definitions
├── middleware.ts           # Astro middleware (auth, routing)
├── pages/                  # Route pages (file-based routing)
│   ├── admin/              # Admin dashboard routes
│   │   ├── categorias/     # Category management
│   │   ├── configuracion/  # Store configuration
│   │   ├── hero/           # Hero section management
│   │   ├── perfil/         # Admin profile
│   │   ├── productos/      # Product management
│   │   ├── index.astro     # Admin dashboard home
│   │   ├── login.astro     # Admin login
│   │   └── logout.astro    # Admin logout
│   ├── productos/          # Product pages
│   │   └── [slug].astro    # Dynamic product detail page
│   ├── checkout.astro      # Checkout page
│   ├── contacto.astro      # Contact page
│   ├── index.astro         # Home page
│   └── productos.astro     # Products listing page
├── styles/                 # Global styles
│   └── global.css          # Tailwind directives & global styles
└── env.d.ts               # Environment type definitions

public/                     # Static assets
├── favicon.svg
└── [other static files]

.kiro/                      # Kiro configuration
└── steering/              # Steering documents

Root Configuration Files:
├── astro.config.mjs       # Astro configuration
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.mjs    # Tailwind CSS configuration
├── package.json           # Dependencies & scripts
├── .env                   # Environment variables
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose setup
├── database-setup.sql     # Database initialization
└── admin-setup.sql        # Admin user initialization
```

## Key Directories Explained

### `/src/components`
- **astro/**: Static components rendered at build time (Header, Footer, ProductCard, etc.)
- **react/**: Interactive components that hydrate on the client (Cart, AddToCartButton, etc.)
- **admin/**: Admin-specific layout and components
- **sections/**: Full-page section components (HeroBanner)

### `/src/lib`
- **supabase.ts**: Functions to interact with Supabase database (CRUD operations, authentication)
- **types.ts**: Shared TypeScript interfaces (CartItem, CartTotals, etc.)
- **admin-auth.ts**: Admin authentication and authorization logic

### `/src/pages`
- Uses Astro's file-based routing
- **admin/**: Protected admin routes (requires authentication)
- **productos/**: Public product pages
- Dynamic routes use `[param]` syntax (e.g., `[slug].astro`)

### `/src/middleware.ts`
- Handles request-level logic (authentication checks, redirects)
- Protects admin routes from unauthorized access

## Data Flow

### Product Display
1. Page requests data via `getProducts()` or `getProductBySlug()` from `/lib/supabase.ts`
2. Data is passed to Astro components for rendering
3. Images are processed through `getSupabaseImage()` helper

### Shopping Cart
1. React components (AddToCartButton, Cart) manage state via Nanostores (`CartStore.ts`)
2. Cart data is stored in browser state (not persisted to database by default)
3. CheckoutForm handles order submission

### Admin Operations
1. Admin pages check authentication via middleware
2. Forms submit to API endpoints or directly to Supabase
3. Changes are reflected in the database and CMS

## Naming Conventions

- **Files**: kebab-case (e.g., `product-card.astro`, `add-to-cart-button.tsx`)
- **Components**: PascalCase (e.g., `ProductCard`, `AddToCartButton`)
- **Functions**: camelCase (e.g., `getProducts()`, `addToCart()`)
- **Types/Interfaces**: PascalCase (e.g., `CartItem`, `Product`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `STRAPI_URL`)

## Component Patterns

### Astro Components
- Static, rendered at build time
- Can fetch data during build
- Use `.astro` extension
- Example: `Header.astro`, `ProductCard.astro`

### React Components
- Interactive, hydrated on client
- Use `.tsx` extension
- Wrapped with `client:load` or similar directive in Astro
- Example: `Cart.tsx`, `AddToCartButton.tsx`

### Page Components
- Located in `/src/pages`
- Automatically become routes
- Can be `.astro` or `.tsx`
- Dynamic routes use `[param]` syntax

## Integration Points

- **Supabase**: Database queries, authentication, and storage in `/lib/supabase.ts`
- **Admin Authentication**: Admin auth in `/lib/admin-auth.ts` and `/src/middleware.ts`
- **State Management**: Nanostores in `/src/components/react/CartStore.ts`
