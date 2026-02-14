# System Architecture Overview

## Platform Architecture

```
┌──────────────────────────────────────────────────────────────────────┐
│                        FRONTEND APPLICATIONS                         │
│  ┌─────────────┐ ┌──────────────┐ ┌────────────┐ ┌───────────────┐  │
│  │ 2bb2-client │ │ 2bb2-merchant│ │ 2bb2-driver│ │ admin_orders  │  │
│  │  Consumer   │ │  Dashboard   │ │  Driver    │ │  portal       │  │
│  └──────┬──────┘ └──────┬───────┘ └─────┬──────┘ └───────┬───────┘  │
│         │               │               │                │          │
│  ┌──────┴───────────────┴───────────────┴────────────────┴───────┐  │
│  │                      2bb2-menu (Public Menu Viewer)            │  │
│  └───────────────────────────────────────────────────────────────┘  │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
┌──────────────────────────────┴───────────────────────────────────────┐
│                     BACKEND SERVICES (Java/Vert.x)                   │
│                                                                      │
│  Authentication:     BE_MerchantAuth · BE_ClientAuth · BE_Auth       │
│  Business Logic:     BE_Orders · BE_Markets · BE_Hub · BE_Drivers    │
│  Financial:          BE_Ledger · BE_Payments · BE_Tickets            │
│  Integration:        BE_HederaTransactions · BE_LandingPortal        │
│  Notifications:      BE_Notifications                                │
│  Blockchain:         layer2-hedera-service                           │
└──────────────────────────────┬───────────────────────────────────────┘
                               │
┌──────────────────────────────┴───────────────────────────────────────┐
│                        DATA & BLOCKCHAIN                             │
│                                                                      │
│  ┌─────────────────┐  ┌─────────────────┐  ┌────────────────────┐   │
│  │ AWS Keyspaces   │  │ Hedera Network  │  │ AWS S3 / IPFS     │   │
│  │ (Cassandra)     │  │ (Hashgraph)     │  │ (File Storage)    │   │
│  │ eu-west-3       │  │ Mainnet/Testnet │  │                    │   │
│  └─────────────────┘  └─────────────────┘  └────────────────────┘   │
└──────────────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend | Vue 3 + TypeScript | 3.2+ |
| Build | Vite | 3.0+ |
| Mobile | Capacitor | Latest |
| Styling | Tailwind CSS | 3.1+ |
| State | Pinia (persisted) | 2.0+ |
| Backend | Java + Vert.x | 11 + 4.5.9 |
| Database | AWS Keyspaces (Cassandra) | Managed |
| Blockchain | Hedera Hashgraph | SDK 2.18-2.64 |
| Smart Contracts | Solidity + Hardhat | 0.8.21 |
| Auth | JWT (Auth0) | — |
| Storage | AWS S3 + IPFS | — |
| Maps | Google Maps + Mapbox | — |
| Notifications | Firebase FCM + Pushy | — |

## Frontend Architecture Pattern

All frontend apps follow **Clean Architecture**:

```
Feature UI (Vue Components / Screens)
    ↓
Presentation (Pinia Stores / ViewModels)
    ↓
Domain (Use Cases / Business Logic)
    ↓
Data (Repository Implementations)
    ↓
Data Sources (Local: IndexedDB / Remote: API)
```

### Monorepo Structure
```
project/
├── app/                    # Main application entry
├── core/
│   ├── model/             # Shared TypeScript interfaces
│   ├── ui/                # Reusable Vue components
│   ├── common/            # Utilities, extensions, config
│   ├── network/           # API client, network config
│   ├── navigation/        # Vue Router setup
│   ├── db/                # Local database (Dexie.js)
│   ├── data/              # Data layer (repositories + data sources)
│   └── domain/            # Business logic (use cases)
└── feature/
    ├── auth/              # Authentication
    ├── shop/              # Shop management
    ├── order/             # Orders
    ├── wallet/            # Wallet
    └── ...                # Other features
```

## Backend Service Pattern

All backend services follow the Vert.x event bus pattern:

```
HTTP Request
    ↓
ServerRequests.java (Router + CORS + JWT Validation)
    ↓
Event Bus Message
    ↓
Verticle Handler (Business Logic)
    ↓
CassandraConnect (Prepared Statements)
    ↓
AWS Keyspaces (Cassandra)
    ↓
JSON Response
```

### Key Patterns
- **Event Bus Communication:** HTTP → Event Bus → Verticle → Reply
- **Prepared Statements:** All DB queries use prepared statements
- **Dynamic Keyspaces:** `CassandraConnect.keyspace("markets")` for environment isolation
- **JWT Extraction:** Shop/user ID extracted from token, never from request body

## External Integrations

| Service | Purpose | Used By |
|---------|---------|---------|
| Twilio | SMS notifications | BE_Notifications |
| WhatsApp | Messaging | BE_Notifications |
| Wolt Drive | Delivery logistics | BE_Orders / Merchant |
| AWS S3 | File/image storage | All apps |
| OpenAI | AI menu creation | Merchant / Driver |
| Google Maps | Mapping, geocoding, routing | Client / Admin |
| Mapbox | Map rendering | Admin Portal |
| Firebase FCM | Push notifications | All mobile apps |
| Pushy SDK | Push notifications | Driver / Admin |
| IPFS (NFT.storage) | Decentralized file storage | Client |
