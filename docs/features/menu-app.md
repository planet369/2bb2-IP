# 2bb2-menu — Public Menu Viewer

**Path:** `/home/planet-9/2bb2/2bb2-menu/`
**Stack:** Vue 3 + TypeScript + Pinia + Tailwind CSS
**Dev Port:** 5175
**Design:** Glassmorphism (Dark theme, Gold accent #FFB900)
**TEU:** 49 | **Value:** $7,350

## Feature Inventory

| Component | Description | TEU |
|-----------|-------------|-----|
| Glassmorphism Design System | Frosted glass cards, gold accent, dark primary | 8 |
| ShopHeader | Shop branding, cover image, info display | 3 |
| CategoryNav | Horizontal scrollable pills with auto-scroll on selection | 5 |
| MenuSection | Section header + item list per category | 3 |
| MenuItem | Item card with image, name, price, quick-add | 3 |
| ItemDetailModal | Full detail modal with customization/add-ons | 8 |
| CartDrawer | Slide-out cart with quantity management (47KB component) | 8 |
| CartFab | Floating "Place Order" button with item count badge | 3 |
| ImageWithFallback | Graceful image loading with SVG placeholder | 3 |
| SkeletonLoader | Loading state placeholder | 3 |
| FooterBanner | Bottom banner | 1 |
| Cart Store (Pinia) | State management for cart operations | 5 |

## Design System

### Colors
- **Primary:** `#121211` (near-black)
- **Gold:** `#FFB900` (brand accent)
- **Gold Light:** `#FFE456`
- **Surface:** `rgba(45,45,50,0.75)` (translucent dark)
- **Surface Light:** `rgba(60,60,65,0.6)`
- **On Primary:** `#FFFFFF`
- **On Surface:** `#E0E0E0`
- **Muted:** `#9CA3AF`

### CSS Utilities
- `.glass-card` — Backdrop blur + rounded + border
- `.glass-card-hover` — Interactive glass card
- `.btn-gold` — Gold CTA button (rounded-full)
- `.btn-gold-outline` — Gold outlined button

### Animations
- `fade-in` — 0.3s ease-out opacity
- `slide-up` — 0.3s ease-out translateY
- `pulse-gold` — Infinite gold glow pulse

### Typography
- Font: Poppins (title + body)

## Types
- `Shop` — shop_id, shop_name, shop_image_url, shop_description, currency
- `ShopCategory` — category_name, items[]
- `MenuItem` — item_id, item_name, item_price, item_description, item_image_url, ingredients[]
- `CartItem` — extends MenuItem with quantity
