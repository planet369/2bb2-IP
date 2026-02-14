# 2bb2 Platform — Intellectual Property Feature Inventory

> **Purpose:** Comprehensive IP catalog of all features, systems, components, and routes
> **Date:** February 14, 2026

---

## IP Pricing Methodology

Each feature/component is valued using a **Technical Effort Unit (TEU)** system based on:

- **Complexity:** Simple (1 TEU) / Medium (3 TEU) / Complex (5 TEU) / Advanced (8 TEU) / Expert (13 TEU)
- **Integration Points:** Each external integration adds 2 TEU
- **Blockchain Work:** Smart contracts and crypto operations add 5-13 TEU
- **Mobile Native:** Capacitor native bridges add 3 TEU per plugin
- **Real-time:** WebSocket/EventBus features add 3 TEU

**TEU Base Rate:** $150/TEU (reflecting senior full-stack + blockchain developer rates)

---

## 1. CLIENT APPLICATION (2bb2-client)

**Total Components:** 150+ Vue components | **Total Routes:** 30+ | **Models:** 40+

### 1.1 Authentication System
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Client Registration Flow | Feature | 8 | $1,200 |
| Wallet Import (Mnemonic/Seed) | Feature | 8 | $1,200 |
| Biometric Auth (Fingerprint/Face) | Feature + Native | 8 | $1,200 |
| Secure Credential Storage | Security | 5 | $750 |
| OTP Verification | Feature | 3 | $450 |
| JWT Token Management | Infrastructure | 5 | $750 |
| Session Validation | Infrastructure | 3 | $450 |
| **Subtotal** | | **40** | **$6,000** |

### 1.2 Shop & Marketplace
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Shop Browsing (Grid/List) | Feature | 5 | $750 |
| Shop Detail View | Feature | 5 | $750 |
| Market View | Feature | 5 | $750 |
| Category Filtering | Feature | 3 | $450 |
| Item Details with Ingredients | Feature | 5 | $750 |
| Shop Search | Feature | 3 | $450 |
| Location-based Shop Discovery | Feature | 5 | $750 |
| Guest Mode | Feature | 3 | $450 |
| **Subtotal** | | **34** | **$5,100** |

### 1.3 Shopping Cart (Wheelbarrow)
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Multi-shop Cart Management | Feature | 8 | $1,200 |
| Cart Persistence (IndexedDB) | Infrastructure | 5 | $750 |
| Quantity Management | Feature | 3 | $450 |
| Promotion Items in Cart | Feature | 5 | $750 |
| Cart Checkout Flow | Feature | 8 | $1,200 |
| **Subtotal** | | **29** | **$4,350** |

### 1.4 Orders
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Order Placement | Feature | 8 | $1,200 |
| Order Tracking (Real-time) | Feature + RT | 8 | $1,200 |
| Order Details View | Feature | 3 | $450 |
| Order Chat | Feature + RT | 8 | $1,200 |
| Order History | Feature | 5 | $750 |
| Pickup Details | Feature | 3 | $450 |
| Order Confirmation | Feature | 3 | $450 |
| **Subtotal** | | **38** | **$5,700** |

### 1.5 Wallet & Crypto
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Hedera Wallet Integration | Blockchain | 13 | $1,950 |
| Crypto Transfer (Send/Receive) | Blockchain | 13 | $1,950 |
| Cash Pickup Flow | Feature | 5 | $750 |
| WhishMoney Transfer | Integration | 8 | $1,200 |
| OMT Transfer | Integration | 8 | $1,200 |
| Balance Display | Feature | 3 | $450 |
| Signature Requests | Blockchain | 8 | $1,200 |
| QR Code Generation/Scanning | Feature | 5 | $750 |
| **Subtotal** | | **63** | **$9,450** |

### 1.6 Promotions
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Promotions Listing | Feature | 3 | $450 |
| Promotion Details | Feature | 3 | $450 |
| Promotion Items Management | Feature | 5 | $750 |
| Shop-specific Promotions | Feature | 3 | $450 |
| **Subtotal** | | **14** | **$2,100** |

### 1.7 Communication
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Inbox / Notifications | Feature | 5 | $750 |
| Direct Messaging | Feature + RT | 8 | $1,200 |
| Topic Conversations | Feature | 5 | $750 |
| Push Notifications (FCM) | Integration + Native | 8 | $1,200 |
| **Subtotal** | | **26** | **$3,900** |

### 1.8 Community & Portal
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Community Portal | Feature | 5 | $750 |
| Raffle System / Ticket Purchase | Feature + Blockchain | 8 | $1,200 |
| User Connections/Friends | Feature | 5 | $750 |
| **Subtotal** | | **18** | **$2,700** |

### 1.9 Core Infrastructure
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Vue 3 Monorepo Architecture | Architecture | 13 | $1,950 |
| Clean Architecture (Data/Domain/Presentation) | Architecture | 13 | $1,950 |
| Pinia State Management (Persisted) | Infrastructure | 5 | $750 |
| Dexie.js Local Database | Infrastructure | 5 | $750 |
| i18n (Multi-language + RTL) | Infrastructure | 5 | $750 |
| Capacitor Mobile Bridge | Infrastructure | 8 | $1,200 |
| Force Update System | Feature | 3 | $450 |
| UI Component Library (21 components) | Design System | 13 | $1,950 |
| Network Layer (Axios + EventBus) | Infrastructure | 5 | $750 |
| Router (30+ routes) | Infrastructure | 5 | $750 |
| **Subtotal** | | **75** | **$11,250** |

### **CLIENT APP TOTAL: 337 TEU = $50,550**

---

## 2. MERCHANT APPLICATION (2bb2-merchant)

### 2.1 Authentication & Onboarding
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Merchant Registration (Multi-step) | Feature | 8 | $1,200 |
| Pre-onboarding Flow | Feature | 5 | $750 |
| OTP Verification | Feature | 3 | $450 |
| Wallet Integration | Blockchain | 13 | $1,950 |
| JWT + Token Refresh | Infrastructure | 5 | $750 |
| **Subtotal** | | **34** | **$5,100** |

### 2.2 Dashboard & Analytics
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Merchant Dashboard | Feature | 8 | $1,200 |
| Business Analytics | Feature | 8 | $1,200 |
| **Subtotal** | | **16** | **$2,400** |

### 2.3 Shop Management
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Menu Item CRUD | Feature | 8 | $1,200 |
| Menu Sections & Sub-sections | Feature | 8 | $1,200 |
| Add-ons / Ingredients Management | Feature | 5 | $750 |
| AI-Powered Menu Creation (OpenAI) | Feature + Integration | 13 | $1,950 |
| Shop Availability Scheduling | Feature | 5 | $750 |
| Shop Tags / Categorization | Feature | 3 | $450 |
| Image Upload (S3) | Feature + Integration | 5 | $750 |
| **Subtotal** | | **47** | **$7,050** |

### 2.4 Order Management
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Order Processing Pipeline | Feature | 8 | $1,200 |
| Order Status Management | Feature | 5 | $750 |
| Pool Management | Feature | 5 | $750 |
| Order Analytics (Top Items/Clients) | Feature | 5 | $750 |
| **Subtotal** | | **23** | **$3,450** |

### 2.5 Delivery System
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Delivery Request Creation | Feature | 8 | $1,200 |
| Driver Availability Tracking | Feature + RT | 8 | $1,200 |
| Wolt Drive Integration | Integration | 8 | $1,200 |
| Delivery Charge Calculation | Feature | 5 | $750 |
| **Subtotal** | | **29** | **$4,350** |

### 2.6 Wallet & Financial
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Wallet Details | Feature | 5 | $750 |
| Invoices System | Feature | 8 | $1,200 |
| Client Management | Feature | 5 | $750 |
| Payment Processing (Cash + 2bb2) | Feature + Blockchain | 13 | $1,950 |
| Ledger / Transaction History | Feature | 5 | $750 |
| **Subtotal** | | **36** | **$5,400** |

### 2.7 Communication & Notifications
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Order Notifications | Feature | 5 | $750 |
| Push Notifications (Pushy/FCM) | Integration + Native | 8 | $1,200 |
| Inbox System | Feature | 5 | $750 |
| **Subtotal** | | **18** | **$2,700** |

### 2.8 Hub Management
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Hub Selection & Config | Feature | 5 | $750 |
| Hub Analytics | Feature | 5 | $750 |
| **Subtotal** | | **10** | **$1,500** |

### 2.9 Promotions
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Promotion CRUD | Feature | 8 | $1,200 |
| Promotion Item Selection | Feature | 5 | $750 |
| Encrypted Route Arguments | Security | 5 | $750 |
| **Subtotal** | | **18** | **$2,700** |

### 2.10 Core Infrastructure
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Vue 3 Monorepo (17 features) | Architecture | 13 | $1,950 |
| Clean Architecture | Architecture | 13 | $1,950 |
| UI Component Library (32 components) | Design System | 13 | $1,950 |
| Token Refresh Service | Infrastructure | 5 | $750 |
| Capacitor Mobile Bridge | Infrastructure | 8 | $1,200 |
| **Subtotal** | | **52** | **$7,800** |

### **MERCHANT APP TOTAL: 283 TEU = $42,450**

---

## 3. DRIVER APPLICATION (2bb2-driver)

### 3.1 Authentication & Onboarding
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| 8-Step Registration Flow | Feature | 13 | $1,950 |
| KYD (Know Your Driver) Verification | Feature | 8 | $1,200 |
| Vehicle Registration | Feature | 5 | $750 |
| Hub Selection | Feature | 3 | $450 |
| Wallet Import | Blockchain | 8 | $1,200 |
| **Subtotal** | | **37** | **$5,550** |

### 3.2 Dashboard & Fleet
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Driver Dashboard | Feature | 5 | $750 |
| Driver Statistics | Feature | 5 | $750 |
| Fleet Management | Feature | 8 | $1,200 |
| Hub Analytics | Feature | 5 | $750 |
| **Subtotal** | | **23** | **$3,450** |

### 3.3 Delivery & Orders
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Deliveries Dashboard | Feature | 8 | $1,200 |
| Delivery Request Processing | Feature | 8 | $1,200 |
| Ticket Management (Order/Pickup) | Feature | 8 | $1,200 |
| Order Pool Management | Feature | 5 | $750 |
| Date-Filtered Requests | Feature | 3 | $450 |
| Driver Availability Toggle | Feature | 3 | $450 |
| **Subtotal** | | **35** | **$5,250** |

### 3.4 Wallet & Financial
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Wallet (same as merchant) | Feature + Blockchain | 13 | $1,950 |
| Client Management | Feature | 5 | $750 |
| Money Transfers (WhishMoney/OMT) | Integration | 8 | $1,200 |
| Invoices | Feature | 5 | $750 |
| Ledger | Feature | 5 | $750 |
| **Subtotal** | | **36** | **$5,400** |

### 3.5 Shop Management
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Menu CRUD + AI Menu | Feature + Integration | 13 | $1,950 |
| Shop Availability & Tags | Feature | 5 | $750 |
| **Subtotal** | | **18** | **$2,700** |

### 3.6 Communication
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Group Chat | Feature + RT | 8 | $1,200 |
| Notifications System | Feature + Native | 8 | $1,200 |
| **Subtotal** | | **16** | **$2,400** |

### 3.7 Core Infrastructure
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Monorepo (19 features, 29 packages) | Architecture | 13 | $1,950 |
| 82 Route Definitions | Infrastructure | 8 | $1,200 |
| PWA Support | Infrastructure | 5 | $750 |
| 3-Language Support (EN/FR/AR + RTL) | Infrastructure | 8 | $1,200 |
| Cryptography Module (Asymmetric/Symmetric/Hashing) | Security | 8 | $1,200 |
| **Subtotal** | | **42** | **$6,300** |

### **DRIVER APP TOTAL: 207 TEU = $31,050**

---

## 4. ADMIN ORDERS PORTAL

### 4.1 Core Features
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Admin Authentication | Feature | 5 | $750 |
| Main Dashboard with Map | Feature | 13 | $1,950 |
| Shop Management (198 components) | Feature | 13 | $1,950 |
| Order Management & Tracking | Feature | 8 | $1,200 |
| Delivery Management System | Feature | 13 | $1,950 |
| Pickup Service Flow | Feature | 8 | $1,200 |
| Taxi/Ride Request System | Feature | 8 | $1,200 |
| History (Orders/Pickups/Rides/Deliveries) | Feature | 8 | $1,200 |
| Wallet & Financial Management | Feature | 8 | $1,200 |
| Community (Blog, Raffles, Friends) | Feature | 8 | $1,200 |
| Payment Processing | Feature | 5 | $750 |
| Real-time Chat | Feature + RT | 8 | $1,200 |
| Status Tracking System | Feature | 5 | $750 |
| **Subtotal** | | **110** | **$16,500** |

### 4.2 Data & Infrastructure
| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| 20 Repository Implementations | Architecture | 13 | $1,950 |
| 9 Remote Data Sources | Infrastructure | 8 | $1,200 |
| Hedera Integration (Account/App/Shop/User) | Blockchain | 13 | $1,950 |
| 28+ Pinia Stores | Infrastructure | 8 | $1,200 |
| Web Workers (Background Processing) | Infrastructure | 5 | $750 |
| Google Maps + Mapbox Integration | Integration | 8 | $1,200 |
| **Subtotal** | | **55** | **$8,250** |

### **ADMIN PORTAL TOTAL: 165 TEU = $24,750**

---

## 5. MENU APPLICATION (2bb2-menu)

| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Glassmorphism Design System | Design | 8 | $1,200 |
| Shop Header Component | Feature | 3 | $450 |
| Category Navigation (Auto-scroll) | Feature | 5 | $750 |
| Menu Section Display | Feature | 3 | $450 |
| Item Detail Modal (Customization) | Feature | 8 | $1,200 |
| Cart Drawer (Slide-out) | Feature | 8 | $1,200 |
| Cart FAB (Floating Button) | Feature | 3 | $450 |
| Image Fallback System | Feature | 3 | $450 |
| Skeleton Loading States | UX | 3 | $450 |
| Pinia Cart Store | Infrastructure | 5 | $750 |
| **Subtotal** | | **49** | **$7,350** |

### **MENU APP TOTAL: 49 TEU = $7,350**

---

## 6. BACKEND SERVICES (14 Services)

### 6.1 Authentication Services
| Service | TEU | Value |
|---------|-----|-------|
| BE_MerchantAuth (Shop CRUD, JWT, Merchant Roles) | 34 | $5,100 |
| BE_ClientAuth (Client Registration, Verification) | 21 | $3,150 |
| BE_Authentication (Core JWT, Token Refresh) | 21 | $3,150 |
| **Subtotal** | **76** | **$11,400** |

### 6.2 Business Logic Services
| Service | TEU | Value |
|---------|-----|-------|
| BE_Hub (Hub Management, Assignment) | 21 | $3,150 |
| BE_Orders (Order Pipeline, Status, Tracking) | 34 | $5,100 |
| BE_Markets (Market Operations, Categories) | 21 | $3,150 |
| BE_Ledger (Transaction Ledger, History) | 21 | $3,150 |
| BE_Tickets (Ticketing System) | 21 | $3,150 |
| BE_Drivers (Driver Registration, Assignment, Tracking) | 21 | $3,150 |
| **Subtotal** | **139** | **$20,850** |

### 6.3 Integration Services
| Service | TEU | Value |
|---------|-----|-------|
| BE_HederaTransactions (Account Creation, Signature Verification) | 34 | $5,100 |
| BE_LandingPortal (Landing Page, Announcements) | 13 | $1,950 |
| BE_Notifications (Push, SMS via Twilio) | 21 | $3,150 |
| BE_Payments (Payment Processing) | 21 | $3,150 |
| **Subtotal** | **89** | **$13,350** |

### 6.4 Service Infrastructure (per service)
| Component | TEU | Value |
|-----------|-----|-------|
| Vert.x Event Bus Architecture (x14) | 56 | $8,400 |
| AWS Keyspaces Connection (SigV4 + SSL) (x14) | 42 | $6,300 |
| CORS Configuration (x14) | 14 | $2,100 |
| Prepared Statement Pattern (x14) | 28 | $4,200 |
| Docker Containerization (x14) | 28 | $4,200 |
| Environment Configuration System | 8 | $1,200 |
| **Subtotal** | **176** | **$26,400** |

### **BACKEND SERVICES TOTAL: 480 TEU = $72,000**

---

## 7. LAYER 2 HEDERA SERVICE

| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Multi-Tenant App Configuration | Architecture | 13 | $1,950 |
| Transaction Builder Service | Blockchain | 13 | $1,950 |
| Transaction Submission Service | Blockchain | 13 | $1,950 |
| Withdraw Escrow Service | Blockchain | 13 | $1,950 |
| Withdraw Contract Service | Blockchain | 8 | $1,200 |
| Order Service | Blockchain | 13 | $1,950 |
| Account Service | Blockchain | 8 | $1,200 |
| Token Allowance Service | Blockchain | 8 | $1,200 |
| Topic Service (HCS) | Blockchain | 8 | $1,200 |
| Crypto Service (Encrypt/Decrypt) | Security + Blockchain | 13 | $1,950 |
| Mirror Network Service | Blockchain | 8 | $1,200 |
| Transaction Repository (Cassandra) | Infrastructure | 8 | $1,200 |
| Order Repository | Infrastructure | 5 | $750 |
| HMAC Security (Builder Tokens) | Security | 8 | $1,200 |
| Hedera Client Manager (Multi-App) | Blockchain | 13 | $1,950 |
| AWS Secrets Manager Integration | Security | 8 | $1,200 |
| 28 REST Endpoints (Unified API) | API | 13 | $1,950 |
| Database Schema (20 Tables) | Infrastructure | 13 | $1,950 |
| **Subtotal** | **186** | **$27,900** |

### **LAYER 2 SERVICE TOTAL: 186 TEU = $27,900**

---

## 8. SMART CONTRACTS (2bb2Contracts)

| Contract | Type | TEU | Value |
|----------|------|-----|-------|
| OrderP2PTD.sol (Fee Distribution) | Smart Contract | 13 | $1,950 |
| OrderP2P.sol | Smart Contract | 8 | $1,200 |
| PickupP2P.sol | Smart Contract | 8 | $1,200 |
| PickUpP2PV2.sol | Smart Contract | 13 | $1,950 |
| TopicP2P.sol | Smart Contract | 8 | $1,200 |
| WithdrawEscrow.sol | Smart Contract | 13 | $1,950 |
| HTS Integration (HederaTokenService) | Smart Contract | 8 | $1,200 |
| Hardhat Config & Deployment Scripts | Infrastructure | 8 | $1,200 |
| Contract Testing Suite | Testing | 8 | $1,200 |
| **Subtotal** | **87** | **$13,050** |

### **SMART CONTRACTS TOTAL: 87 TEU = $13,050**

---

## 9. STABLECOIN STUDIO

| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| Diamond Proxy Architecture (12 Facets) | Smart Contract | 55 | $8,250 |
| Factory Contract (Single-TX Deployment) | Smart Contract | 13 | $1,950 |
| Business Logic Resolver (Upgradeable) | Smart Contract | 13 | $1,950 |
| Reserve System (Chainlink Integration) | Smart Contract | 8 | $1,200 |
| Hold Management (Escrow) | Smart Contract | 8 | $1,200 |
| NestJS Backend (Multi-Sig TX) | Backend | 21 | $3,150 |
| TypeScript SDK (ESM + CJS) | Library | 34 | $5,100 |
| CLI Tool | Tool | 13 | $1,950 |
| React Web DApp | Frontend | 21 | $3,150 |
| **Subtotal** | **186** | **$27,900** |

### **STABLECOIN STUDIO TOTAL: 186 TEU = $27,900**

---

## 10. DATABASE ARCHITECTURE

| Component | Type | TEU | Value |
|-----------|------|-----|-------|
| 8 Keyspace Designs | Architecture | 16 | $2,400 |
| Table Schemas (markets, ledger, etc.) | Infrastructure | 21 | $3,150 |
| Layer 2 Schema (20 tables) | Architecture | 13 | $1,950 |
| SigV4 Authentication Setup | Security | 5 | $750 |
| Multi-Region (eu-west-3 + eu-west-1) | Infrastructure | 8 | $1,200 |
| **Subtotal** | **63** | **$9,450** |

### **DATABASE TOTAL: 63 TEU = $9,450**

---

## ROUTES INVENTORY

### Client App Routes (30+)
```
/                          → Auth/Login
/registration              → Client Registration
/import-wallet             → Wallet Import
/allow-biometrics          → Biometric Setup
/landing/home              → Home
/landing/wallet            → Wallet
/landing/history           → History
/landing/inbox             → Inbox
/landing/portal            → Portal
/shops                     → Shop List
/shop/:id                  → Shop Detail
/market/:id                → Market View
/category-shops/:tag       → Category Filter
/item-details              → Item Detail
/order-wheelbarrow         → Cart
/order-checkout            → Checkout
/order-details             → Order Detail
/order-chat                → Order Chat
/promotions                → Promotions
/promotion-details         → Promotion Detail
/transfer                  → Crypto Transfer
/cash-pickup               → Cash Pickup
/receive-crypto            → Receive Crypto
/whish-money-transfer      → WhishMoney
/payment                   → Payment
/topic-conversation        → Topic Chat
/create-topic              → Create Topic
/connection-conversation   → DM
/portal                    → Community
/buy-ticket/:match_id      → Raffle Ticket
```

### Merchant App Routes (40+)
```
/                          → Login
/registration/*            → Multi-step Registration
/dashboard                 → Dashboard
/shop/menu                 → Menu Management
/shop/add-item             → Add Menu Item
/shop/sections             → Menu Sections
/shop/add-ons              → Add-ons
/shop/promotions           → Promotions
/shop/availability         → Availability
/shop/tags                 → Tags
/orders                    → Order List
/order/:id                 → Order Detail
/delivery                  → Delivery Dashboard
/wallet                    → Wallet
/wallet/invoices           → Invoices
/wallet/clients            → Client Management
/wallet/settings           → Settings
/ledger                    → Ledger
/hub                       → Hub Management
/inbox                     → Inbox
/notifications             → Notifications
/portal                    → Portal/Blog
```

### Driver App Routes (82)
```
/                          → Pre-onboarding
/register/*                → 8-Step Registration
/login                     → Login
/import-account            → Account Import
/otp                       → OTP Verify
/dashboard                 → Dashboard
/driver-stats              → Statistics
/fleet                     → Fleet Management
/orders                    → Orders
/order/:id                 → Order Detail
/order-chat                → Order Chat
/deliveries                → Deliveries
/delivery/request          → Request Delivery
/delivery/ticket/:id       → Ticket Detail
/tickets/pending           → Pending Tickets
/wallet                    → Wallet
/wallet/clients/*          → Client Management
/wallet/crypto/*           → Crypto Operations
/wallet/transfers/*        → Money Transfers
/ledger                    → Ledger
/hubs                      → Hubs
/shop/edit                 → Shop Edit
/shop/menu/*               → Menu Management
/inbox                     → Group Chat
/notifications             → Notifications
/portal/*                  → Blog Management
/landing/*                 → Landing Tabs
```

### Admin Portal Routes (14)
```
/                          → Landing
/register-account          → Register
/sign-in                   → Sign In
/import-account            → Import Account
/shop/:id                  → Shop Management
/merchants/:id             → Merchant View
/pickup                    → Pickup Service
/taxi                      → Taxi/Ride
/deliveries                → Deliveries
/history/:type             → History Views
/community                 → Community
/inbox                     → Inbox
/request-status/:id        → Status Tracking
```

### Layer 2 API Routes (28)
```
POST   /layer2/:appId/transfer/build
POST   /layer2/:appId/transfer/submit
GET    /layer2/:appId/transfer/:txId
POST   /layer2/:appId/withdraw/build
POST   /layer2/:appId/withdraw/submit
GET    /layer2/:appId/withdraw/pending
GET    /layer2/:appId/withdraw/contract/:id
GET    /layer2/:appId/withdraw/:txId
POST   /layer2/:appId/withdraw/:txId/accept
POST   /layer2/:appId/withdraw/:txId/confirm/build
POST   /layer2/:appId/withdraw/:txId/confirm/submit
POST   /layer2/:appId/withdraw/:txId/cancel
GET    /layer2/:appId/transactions
POST   /layer2/:appId/order/build
POST   /layer2/:appId/order/submit
GET    /layer2/:appId/order/:orderId
POST   /layer2/:appId/account/create
POST   /layer2/:appId/topic/create
POST   /layer2/:appId/topic/message/build
POST   /layer2/:appId/topic/message/submit
POST   /layer2/:appId/token/allowance/build
POST   /layer2/:appId/token/allowance/submit
POST   /layer2/:appId/crypto/decrypt
POST   /layer2/:appId/crypto/encrypt
POST   /layer2/:appId/topic/messages/decrypt
POST   /layer2/:appId/topic/message/encrypt-build
GET    /health
```

---

## PRICING SUMMARY

| Category | TEU | Value ($150/TEU) |
|----------|-----|-------------------|
| 2bb2-client (Consumer App) | 337 | $50,550 |
| 2bb2-merchant (Merchant Dashboard) | 283 | $42,450 |
| 2bb2-driver (Driver App) | 207 | $31,050 |
| admin_orders_portal (Admin Portal) | 165 | $24,750 |
| 2bb2-menu (Menu Viewer) | 49 | $7,350 |
| Backend Services (14) | 480 | $72,000 |
| Layer 2 Hedera Service | 186 | $27,900 |
| Smart Contracts | 87 | $13,050 |
| Stablecoin Studio | 186 | $27,900 |
| Database Architecture | 63 | $9,450 |
| **TOTAL** | **2,043** | **$306,450** |

### Pricing Notes
- TEU rate of $150 reflects blended rate for senior full-stack, blockchain, and DevOps engineers
- Does not include: project management, QA, design, documentation, deployment infrastructure costs
- Market rate range: $250K–$500K for comparable marketplace + blockchain platforms
- Intellectual property value (brand, market position, data) not included in technical valuation

---

*Generated: Feb 14, 2026 — 2bb2-IP Sprint*
