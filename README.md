# 2bb2 Platform — Executive Feature Map

> **Sprint:** 33-Hour Continuous Sprint (Feb 14–17, 2026)
> **Demo Day:** February 17, 2026

---

## Platform Overview

2bb2 is a decentralized marketplace platform built on **Hedera Hashgraph** blockchain. It connects merchants, clients, and drivers through a suite of web and mobile applications backed by 14+ microservices and Layer 2 blockchain infrastructure.

### Architecture at a Glance

```
┌──────────────────────────────────────────────────────────────────────┐
│                        FRONTEND APPLICATIONS                         │
│  ┌─────────────┐ ┌──────────────┐ ┌────────────┐ ┌───────────────┐  │
│  │ 2bb2-client │ │ 2bb2-merchant│ │ 2bb2-driver│ │ admin_orders  │  │
│  │  (Vue 3)    │ │  (Vue 3)     │ │  (Vue 3)   │ │  portal       │  │
│  └──────┬──────┘ └──────┬───────┘ └─────┬──────┘ └───────┬───────┘  │
│         │               │               │                │          │
│  ┌──────┴───────────────┴───────────────┴────────────────┴───────┐  │
│  │                      2bb2-menu (Vue 3)                        │  │
│  │              Public menu viewer (glassmorphism UI)             │  │
│  └───────────────────────────────────────────────────────────────┘  │
└──────────────────────────────┬───────────────────────────────────────┘
                               │ HTTPS / WebSocket / EventBus
┌──────────────────────────────┴───────────────────────────────────────┐
│                        BACKEND SERVICES (14)                         │
│  BE_MerchantAuth · BE_ClientAuth · BE_Authentication · BE_Hub       │
│  BE_Orders · BE_Markets · BE_Ledger · BE_Tickets · BE_Drivers       │
│  BE_HederaTransactions · BE_LandingPortal · BE_Notifications        │
│  BE_Payments · layer2-hedera-service                                │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
┌──────────────────────────────┴───────────────────────────────────────┐
│                        BLOCKCHAIN LAYER                              │
│  ┌──────────────┐ ┌─────────────────┐ ┌────────────────────────┐    │
│  │ 2bb2Contracts│ │ stablecoin-     │ │ layer2-hedera-service │    │
│  │ (Solidity)   │ │ studio          │ │ (Meta-Tx Service)     │    │
│  └──────────────┘ └─────────────────┘ └────────────────────────┘    │
│                    Hedera Hashgraph Network                          │
└──────────────────────────────────────────────────────────────────────┘
                               │
┌──────────────────────────────┴───────────────────────────────────────┐
│                        DATA LAYER                                    │
│  AWS Keyspaces (Cassandra) · AWS S3 · Hedera Mirror Network         │
│  Keyspaces: markets, markets_client_app, markets_ledger, socials,   │
│  accounting, contracts, istithmari, market_tickets                   │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Frontend Applications

### 1. 2bb2-client — Consumer App
**Path:** `/home/planet-9/2bb2/2bb2-client/`
**Stack:** Vue 3 + TypeScript + Capacitor (iOS/Android) + Tailwind CSS
**Dev Port:** 5173

| Feature | Description |
|---------|-------------|
| **Auth / Biometrics** | Registration, login, wallet import, fingerprint/face auth |
| **Shop Browsing** | Browse shops by category, location, search |
| **Promotions** | View shop promotions, add promo items to cart |
| **Wheelbarrow (Cart)** | Multi-shop shopping cart management |
| **Orders** | Checkout, order tracking, order chat, pickup details |
| **Wallet** | Crypto wallet, transfers, cash pickup, WhishMoney, OMT |
| **Ledger** | Transaction history |
| **Inbox / Connections** | Direct messaging, notifications |
| **Portal** | Community portal, raffles, ticket purchases |
| **Categories** | Product category browsing |
| **Landing** | Bottom navigation hub (Home, History, Inbox, Settings, Wallet) |

**Key Models:** Client, Shop, Item, Order, Promotion, Location, Currency
**Architecture:** Clean Architecture (Presentation → Domain → Data → DataSource)

---

### 2. 2bb2-merchant — Merchant Dashboard
**Path:** `/home/planet-9/2bb2/2bb2-merchant/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS
**Dev Port:** 5173

| Feature | Description |
|---------|-------------|
| **Auth** | Merchant registration, multi-step onboarding, OTP |
| **Dashboard** | Business overview and analytics |
| **Shop Management** | Menu items, sections, sub-sections, add-ons, AI menu creation |
| **Orders** | Order management, status tracking, pool management |
| **Delivery** | Delivery request creation, driver availability, Wolt Drive integration |
| **Wallet** | Wallet details, invoices, client management, settings |
| **Payment** | Cash and 2bb2 token payment processing |
| **Ledger** | Transaction ledger with ticket details |
| **Promotions** | Create, edit, delete shop promotions |
| **Hub Management** | Hub selection and configuration |
| **Inbox / Notifications** | Order notifications, messaging |
| **Portal** | Community blog posts |
| **Pre-onboarding** | Initial merchant onboarding flow |
| **Landing** | Tab navigation (Dashboard, Wallet, Ledger, Inbox, Portal) |

**17 Feature Modules:** auth, dashboard, delivery, hub, inbox, landing, ledger, notifications, order, otp, payment, portal, preonboarding, promotions, shop, wallet

---

### 3. 2bb2-driver — Driver App
**Path:** `/home/planet-9/2bb2/2bb2-driver/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS + PWA
**Dev Port:** 5173

| Feature | Description |
|---------|-------------|
| **Auth** | 8-step registration: password, phone, KYD verification, vehicle, hub, shop, owner info |
| **Dashboard** | Driver statistics and performance metrics |
| **Fleet Management** | Hub analytics, fleet metrics |
| **Driver Stats** | Performance metrics, registered hubs, ticket summaries |
| **Delivery** | Delivery requests, ticket details, date-filtered requests |
| **Orders** | Order management, pool, menu, analytics (top items/clients) |
| **Wallet** | Client management, availability, crypto ops, money transfers |
| **Ledger** | Transaction history with ticket details |
| **Tickets** | Pending ticket management (order/pickup tickets) |
| **Hub** | Hub selection and information |
| **Shop Management** | Menu editing, sections, add-ons, AI menu, shop tags, availability |
| **Inbox / Notifications** | Group chat, notification management |
| **Portal** | Community blog CRUD |
| **Invoices** | Invoice generation |
| **Payment** | Payment processing |

**19 Feature Modules** | **82 Routes** | **PWA Enabled** | **3 Languages:** EN, FR, AR (RTL)

---

### 4. admin_orders_portal — Admin Portal
**Path:** `/home/planet-9/2bb2/admin_orders_portal/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS
**Dev Port:** 5173

| Feature | Description |
|---------|-------------|
| **Accounts** | Admin registration, login, account import |
| **Main Dashboard** | Map view, order management, pickup service, taxi/ride requests |
| **Shop Management** | Menu management (198 Vue components), shop status, pool, ledger |
| **History** | Orders, pickups, taxi/rides, market orders, deliveries history |
| **Wallet** | Profile, ledger, pool, location management, 2bb2 access |
| **Deliveries** | Create delivery requests, filter by shop/driver/status/vehicle |
| **Community** | Blog posts, friends/connections, raffles, user discovery |
| **Payment** | Butler service, taxi payments |
| **Status Tracking** | Request status tracking, ledger items |
| **Ride Requests** | Taxi/ride booking flow |
| **Inbox / Chat** | Messaging system, notifications |

**567 TypeScript/Vue files** | **28+ Pinia stores** | **14 main routes**
**Key Integration:** Google Maps, Mapbox, Hedera blockchain

---

### 5. 2bb2-menu — Public Menu Viewer
**Path:** `/home/planet-9/2bb2/2bb2-menu/`
**Stack:** Vue 3 + TypeScript + Pinia + Tailwind CSS
**Dev Port:** 5175

| Feature | Description |
|---------|-------------|
| **Shop Header** | Shop branding, info, cover image |
| **Category Navigation** | Horizontal scrollable category pills with auto-scroll |
| **Menu Display** | Menu sections with items, prices, descriptions |
| **Item Details** | Modal with item customization, add-ons, ingredients |
| **Cart (Drawer)** | Slide-out cart with quantity management |
| **Cart FAB** | Floating "Place Order" button with item count |

**Design:** Glassmorphism UI (dark theme, gold accent `#FFB900`, frosted glass cards)
**Components:** CartDrawer, CartFab, CategoryNav, ShopHeader, MenuItem, MenuSection, ItemDetailModal, ImageWithFallback, SkeletonLoader, FooterBanner

---

## Backend Services

All services: **Java 11 + Vert.x 4.5.9** | **AWS Keyspaces (Cassandra)** | **JWT Auth** | **Port 8080**

| Service | Path | Purpose | Key Endpoints |
|---------|------|---------|---------------|
| **BE_MerchantAuth** | `apis/BE_MerchantAuth/` | Merchant authentication, shop CRUD | RegisterMerchant, Login, GetShopData, UpdateShop |
| **BE_ClientAuth** | `apis/BE_ClientAuth/` | Client registration & auth | RegisterClient, VerifyClient, Login |
| **BE_Authentication** | `apis/BE_Authentication/` | Core auth (JWT issuing) | Authenticate, RefreshToken, ValidateToken |
| **BE_Hub** | `apis/BE_Hub/` | Hub management | CreateHub, GetHubs, AssignToHub |
| **BE_Orders** | `apis/BE_Orders/` | Order processing | CreateOrder, GetOrders, UpdateOrderStatus |
| **BE_Markets** | `apis/BE_Markets/` | Market operations | GetMarkets, GetShopsByCategory |
| **BE_Ledger** | `apis/BE_Ledger/` | Transaction ledger | GetLedger, CreateLedgerEntry |
| **BE_Tickets** | `apis/BE_Tickets/` | Ticketing system | CreateTicket, GetTickets, UpdateTicket |
| **BE_Drivers** | `apis/BE_Drivers/` | Driver management | RegisterDriver, GetDrivers, AssignDriver |
| **BE_HederaTransactions** | `apis/BE_HederaTransactions/` | Hedera blockchain ops | CreateAccount, VerifySignature |
| **BE_LandingPortal** | `apis/BE_LandingPortal/` | Landing page backend | GetLandingData, GetAnnouncements |
| **layer2-hedera-service** | `apis/layer2-hedera-service/` | Layer 2 meta-transactions | See Blockchain section below |

### Service Pattern
```
HTTP Request → CORS Handler → JWT Validation → Event Bus → Verticle → Cassandra → Response
```

---

## Blockchain / Hedera Integration

### 2bb2Contracts — Smart Contracts
**Path:** `/home/planet-9/2bb2/2bb2Contracts/`
**Stack:** Solidity 0.8.21 + Hardhat

| Contract | Purpose |
|----------|---------|
| `OrderP2PTD.sol` | P2P order transactions with percentage fee distribution |
| `OrderP2P.sol` | Basic P2P order management |
| `PickupP2P.sol` | Pickup transaction v1 |
| `PickUpP2PV2.sol` | Enhanced pickup transaction v2 |
| `TopicP2P.sol` | Topic-based messaging for orders |
| `WithdrawEscrow.sol` | Cash withdrawal escrow (24hr timeout, 3-attempt limit) |

### Layer 2 Hedera Service — Meta-Transaction Service
**Path:** `/home/planet-9/2bb2/apis/layer2-hedera-service/`
**Stack:** Java 11 + Vert.x 4.5.9 + Hedera SDK 2.64.0

**28 REST Endpoints** organized by domain:

| Domain | Endpoints |
|--------|-----------|
| **Transfer** | `POST build`, `POST submit`, `GET :txId` |
| **Withdraw** | `POST build`, `POST submit`, `GET pending`, `GET :txId`, `POST accept`, `POST confirm/build`, `POST confirm/submit`, `POST cancel` |
| **Order** | `POST build`, `POST submit`, `GET :orderId` |
| **Account** | `POST create` |
| **Topic** | `POST create`, `POST message/build`, `POST message/submit` |
| **Token** | `POST allowance/build`, `POST allowance/submit` |
| **Crypto** | `POST decrypt`, `POST encrypt`, `POST messages/decrypt`, `POST encrypt-build` |
| **Transactions** | `GET all` |

**Transaction Flow:**
1. Frontend calls `/layer2/{appId}/transfer/build` → unsigned TX bytes
2. User signs with wallet private key
3. Frontend calls `/layer2/{appId}/transfer/submit` → backend adds payer signature → submits to Hedera

### Stablecoin Studio
**Path:** `/home/planet-9/2bb2/stablecoin-studio/`
**5 modules:** Contracts (Solidity), Backend (NestJS), SDK (TypeScript), CLI, Web (React)

- Enterprise stablecoin management on Hedera
- Diamond proxy pattern for upgradeable contracts
- Multi-signature transaction support
- Role-based access control (Admin, CashIn, Burn, Wipe, Freeze, KYC)

---

## Database Architecture

### AWS Keyspaces (Cassandra)

| Keyspace | Purpose |
|----------|---------|
| `markets` | Shop and merchant data |
| `markets_client_app` | Client orders and app data |
| `markets_ledger` | Transaction ledger |
| `socials` | Blogs and announcements |
| `accounting` | Invoices |
| `contracts` | Hedera accounts |
| `istithmari` | Email verification |
| `market_tickets` | Ticketing |

**Layer 2 Service Tables (20):**
- Transaction tables (6): `app_config`, `transactions`, `transactions_by_user`, `transactions_by_status`, `user_balances`, `balance_history`
- Accounting tables (8): `entity_registry`, `entity_lookup`, `fee_distribution_rules`, `transaction_splits`, `transaction_splits_by_entity`, `account_ledger`, `accounting_periods`, `payment_events`
- System tables (6): `treasury_accounts`, `reconciliation_log`, `pricing_config`, `rate_limits`, `transaction_receipts`, `system_config`

---

## Technology Stack Summary

| Layer | Technology |
|-------|-----------|
| **Frontend** | Vue 3, TypeScript, Vite, Tailwind CSS, Pinia, Capacitor |
| **Backend** | Java 11, Vert.x 4.5.9, Maven |
| **Database** | AWS Keyspaces (Cassandra), eu-west-3 |
| **Blockchain** | Hedera Hashgraph, Solidity, Hardhat |
| **Mobile** | Capacitor (iOS + Android) |
| **Maps** | Google Maps, Mapbox GL |
| **Payments** | 2bb2 tokens (HTS), cash, WhishMoney, OMT |
| **Notifications** | Firebase FCM, Pushy SDK |
| **Storage** | AWS S3, IPFS (NFT.storage) |
| **Integrations** | Twilio SMS, WhatsApp, Wolt Drive, OpenAI |

---

## External Integrations

| Service | Purpose |
|---------|---------|
| **Twilio** | SMS notifications |
| **WhatsApp** | Messaging |
| **Wolt Drive** | Delivery service API |
| **AWS S3** | File uploads |
| **OpenAI** | AI-powered menu creation |
| **Google Maps** | Maps, geocoding, routing |
| **Mapbox** | Map rendering |
| **Firebase** | Push notifications (FCM) |
| **IPFS** | Decentralized file storage |

---

## Deployed Environments

| Environment | Domain | Purpose |
|-------------|--------|---------|
| **2bb2 Production** | genesis.2bb2.io | Live marketplace |
| **TYQA** | tyqa.app / app.tyqa.io | Isolated fork (separate DB, JWT, CORS) |
| **Dev** | localhost:5173-5175 | Local development |

---

## Sprint Plan (Feb 14-17)

| Phase | Hours | Focus |
|-------|-------|-------|
| 1. Brainstorming | 0-3 | Feature maps, architecture blueprints |
| 2. Docs Platform | 3-8 | VitePress docs site with team review |
| 3. Agent Planning | 8-14 | 33 agents in 11 teams, full execution plan |
| 4. Task Invention | 14-19 | Back-planned tasks with inverted steps |
| 5. Parallel Execution | 19-28 | All agents execute simultaneously |
| 6. Deployment | 28-33 | Deploy 5 apps to AWS |

---

*Generated: Feb 14, 2026 — 2bb2-IP Sprint*
