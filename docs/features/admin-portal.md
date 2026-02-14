# admin_orders_portal — Admin Portal

**Path:** `/home/planet-9/2bb2/admin_orders_portal/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS
**Dev Port:** 5173
**Files:** 567 TypeScript/Vue files | **Source Size:** 27MB
**Pinia Stores:** 28+ | **Routes:** 14 main
**TEU:** 165 | **Value:** $24,750

## Feature Inventory

### Core Features (110 TEU — $16,500)

| Feature | Components | TEU |
|---------|-----------|-----|
| Admin Authentication | Register, Login, Import Account | 5 |
| Main Dashboard + Map | Google Maps + Mapbox integration, Shop tabs | 13 |
| Shop Management | 198 Vue components, menu mgmt, shop status | 13 |
| Order Management | Merchants, Wheelbarrow, Confirm, Tracking | 8 |
| Delivery Management | Create/Filter/Track delivery requests | 13 |
| Pickup Service | Full pickup flow with tracking + feedback | 8 |
| Taxi/Ride System | Ride booking, tracking, driver details | 8 |
| History Views | Orders, Pickups, Rides, Market Orders, Deliveries | 8 |
| Wallet & Financial | Profile, Ledger, Pool, Location, 2bb2 Access | 8 |
| Community | Blog CRUD, Friends, Raffles, User Discovery | 8 |
| Payment Processing | Butler service, Taxi payments | 5 |
| Real-time Chat | Messaging interface | 8 |
| Status Tracking | Request status, Ledger items | 5 |

### Data & Infrastructure (55 TEU — $8,250)
- 20 Repository Implementations (Repository pattern)
- 9 Remote Data Sources
- Hedera Integration (Account/App/Shop/User)
- 28+ Pinia Stores with persistence
- Web Workers for background processing
- Google Maps + Mapbox dual-map integration

## Data Architecture

### Remote Data Sources (9)
- ClientsRemoteDataSource (9 files)
- DeliveryRemoteDataSource
- OrderRemoteDataSource, PickUpRemoteDataSource, TaxiRemoteDataSource
- MarketOrderRemoteDataSource, RequestsRemoteDataSource
- WalletRemoteDataSource, ShopsRemoteDataSource

### Repositories (20)
Delivery, Order, PickUp, Taxi, Shops, Clients, Inbox, Wallet, MarketOrder, Ride, Token, Community, Match, Location, Raffle, TobiAi, Requests, Shop + helpers

### Domain Entities (20+)
Client, User, Shop (18 interfaces), Item, Request, Currency, Ledger, Location (7 interfaces), Ticket, Application, Payment, Inbox (Message/Notification/Contact), OrderRequest, PickUpRequest, RideRequest, Driver, Blog, History variants, HCS types
