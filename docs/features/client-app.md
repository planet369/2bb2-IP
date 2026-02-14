# 2bb2-client — Consumer App

**Path:** `/home/planet-9/2bb2/2bb2-client/`
**Stack:** Vue 3 + TypeScript + Capacitor (iOS/Android) + Tailwind CSS
**Dev Port:** 5173
**Architecture:** Clean Architecture (Presentation → Domain → Data → DataSource)
**TEU:** 337 | **Value:** $50,550

## Feature Inventory

### Authentication System (40 TEU — $6,000)
- Client Registration Flow (multi-step)
- Wallet Import via Mnemonic/Seed Phrase
- Biometric Authentication (Fingerprint/Face via Capacitor)
- Secure Credential Storage (encrypted, DevTools-safe)
- OTP Verification
- JWT Token Management with auto-refresh
- Session Validation

### Shop & Marketplace (34 TEU — $5,100)
- Shop Browsing (Grid/List views)
- Shop Detail View with menu
- Market View
- Category Filtering
- Item Details with Ingredients
- Shop Search
- Location-based Shop Discovery
- Guest Mode browsing

### Shopping Cart / Wheelbarrow (29 TEU — $4,350)
- Multi-shop Cart Management
- Cart Persistence via IndexedDB (Dexie.js)
- Quantity Management
- Promotion Items in Cart
- Cart Checkout Flow

### Orders (38 TEU — $5,700)
- Order Placement with confirmation
- Real-time Order Tracking (WebSocket/EventBus)
- Order Details View
- Order Chat (real-time messaging)
- Order History
- Pickup Details
- Order Confirmation screen

### Wallet & Crypto (63 TEU — $9,450)
- Hedera Wallet Integration (@hashgraph/sdk)
- Crypto Transfer (Send/Receive)
- Cash Pickup Flow
- WhishMoney Transfer integration
- OMT Transfer integration
- Balance Display
- Signature Requests
- QR Code Generation & Scanning

### Promotions (14 TEU — $2,100)
- Promotions Listing (all / per-shop)
- Promotion Details with items
- Promotion Items Management
- Shop-specific Promotions

### Communication (26 TEU — $3,900)
- Inbox / Notifications
- Direct Messaging (real-time)
- Topic Conversations
- Push Notifications (Firebase FCM + Capacitor)

### Community & Portal (18 TEU — $2,700)
- Community Portal
- Raffle System / Ticket Purchase (blockchain-backed)
- User Connections / Friends

### Core Infrastructure (75 TEU — $11,250)
- Vue 3 Workspace Monorepo (core/*, feature/*)
- Clean Architecture layers
- Pinia State Management with persistence
- Dexie.js Local Database (IndexedDB)
- i18n Multi-language + RTL support
- Capacitor Mobile Bridge (Camera, Geolocation, Push, Biometrics)
- Force Update System
- UI Component Library (21 reusable components)
- Network Layer (Axios + Vert.x EventBus Bridge)
- Vue Router (30+ routes)

## Data Models
- Client, ClientInfo, ClientRegistration, ClientVerification
- Shop, ShopInfo, ShopView, ShopCategory, ShopHub
- Item, RequestItem, Ingredient, ItemDetails
- Promotion, PromotionItem
- Category
- Location, Currency
- Order, OrderStatus

## Core UI Components
Button, ButtonNoHover, CardView, FloatingActionButton, TextField, TextArea, Dropdown, AutoCompleteTextField, PasswordTextField, TabsView, StaggeredGridView, PullToRefresh, LoadingView, LoadingSpinner, SvgLoadingView, ToastView, ImageViewerView, ImagePostView, ChangeLanguageDialog, InfoView, ImageTitleSubtitleView
