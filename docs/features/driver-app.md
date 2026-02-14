# 2bb2-driver — Driver App

**Path:** `/home/planet-9/2bb2/2bb2-driver/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS + PWA
**Dev Port:** 5173
**Feature Modules:** 19 | **Workspace Packages:** 29 | **Routes:** 82
**Languages:** English, French, Arabic (RTL)
**TEU:** 207 | **Value:** $31,050

## Feature Inventory

### Authentication & Onboarding (37 TEU — $5,550)
- 8-Step Registration Flow:
  1. Create Password
  2. Phone Number Registration
  3. KYD (Know Your Driver) Verification
  4. Vehicle Registration
  5. Hub Selection
  6. Shop Creation
  7. Owner Info
  8. Status Screen
- Account Import (Passphrase + Password)
- Wallet Integration (Hedera)

### Dashboard & Fleet (23 TEU — $3,450)
- Driver Dashboard
- Driver Statistics (performance metrics)
- Fleet Management (hub analytics, fleet metrics)
- Hub Analytics with cards and info views

### Delivery & Orders (35 TEU — $5,250)
- Deliveries Dashboard
- Delivery Request Processing
- Ticket Management (Order tickets, Pickup tickets)
- Order Pool Management
- Date-Filtered Requests
- Driver Availability Toggle

### Wallet & Financial (36 TEU — $5,400)
- Full Wallet (same capabilities as Merchant)
- Client Management (Add/Edit/Details)
- Money Transfers (WhishMoney, OMT)
- Invoices
- Ledger with ticket details

### Shop Management (18 TEU — $2,700)
- Menu CRUD with AI-powered creation (OpenAI)
- Shop Availability & Tags management

### Communication (16 TEU — $2,400)
- Group Chat (real-time)
- Notification Management with status tracking

### Core Infrastructure (42 TEU — $6,300)
- Monorepo Architecture (19 features, 29 packages)
- 82 Route Definitions
- PWA Support (offline-capable, service worker)
- 3-Language Support with RTL
- Cryptography Module (Asymmetric, Symmetric, Argon2 Hashing)

## 19 Feature Modules
`auth` · `otp` · `preonboarding` · `dashboard` · `driver` · `fleet` · `wallet` · `payment` · `ledger` · `order` · `delivery` · `tickets` · `hub` · `inbox` · `notifications` · `portal` · `landing` · `shop` · `invoices`

## Core Modules (11)
`@core/ui` · `@core/model` · `navigation` · `@core/network` · `@core/db` · `@core/common` · `@core/notificationmanager` · `core/cryptography/encryption` · `core/cryptography/hashing` · `core/data` · `core/domain`
