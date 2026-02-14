# Routes & Endpoints Inventory

## Frontend Routes

### Client App (30+ routes)

| Route | Screen | Feature |
|-------|--------|---------|
| `/` | Login | Auth |
| `/registration` | Registration | Auth |
| `/import-wallet` | Wallet Import | Auth |
| `/allow-biometrics` | Biometric Setup | Auth |
| `/landing/home` | Home | Landing |
| `/landing/wallet` | Wallet | Landing |
| `/landing/history` | History | Landing |
| `/landing/inbox` | Inbox | Landing |
| `/landing/portal` | Portal | Landing |
| `/shops` | Shop List | Shop |
| `/shop/:id` | Shop Detail | Shop |
| `/market/:id` | Market View | Shop |
| `/category-shops/:tag` | Category Filter | Shop |
| `/item-details` | Item Detail | Shop |
| `/order-wheelbarrow` | Cart | Order |
| `/order-checkout` | Checkout | Order |
| `/order-details` | Order Detail | Order |
| `/order-chat` | Order Chat | Order |
| `/promotions` | Promotions | Promotions |
| `/promotion-details` | Promo Detail | Promotions |
| `/transfer` | Crypto Transfer | Wallet |
| `/cash-pickup` | Cash Pickup | Wallet |
| `/receive-crypto` | Receive Crypto | Wallet |
| `/whish-money-transfer` | WhishMoney | Wallet |
| `/payment` | Payment | Payment |
| `/topic-conversation` | Topic Chat | Communication |
| `/create-topic` | Create Topic | Communication |
| `/connection-conversation` | Direct Message | Communication |
| `/portal` | Community | Portal |
| `/buy-ticket/:match_id` | Buy Raffle Ticket | Portal |

### Driver App (82 routes)

Key routes covering 19 feature modules across authentication, dashboard, fleet, delivery, orders, wallet, shop management, communication, and community.

### Admin Portal (14 main routes)

| Route | Screen |
|-------|--------|
| `/` | Landing |
| `/register-account` | Register |
| `/sign-in` | Sign In |
| `/import-account` | Import Account |
| `/shop/:id` | Shop Management |
| `/merchants/:id` | Merchant View |
| `/pickup` | Pickup Service |
| `/taxi` | Taxi/Ride |
| `/deliveries` | Delivery Management |
| `/history/:type` | History Views |
| `/community` | Community |
| `/inbox` | Inbox |
| `/request-status/:id` | Status Tracking |

---

## Backend API Endpoints

### Layer 2 Hedera Service (28 endpoints)

#### Transfer
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/transfer/build` | Build unsigned transfer |
| POST | `/layer2/:appId/transfer/submit` | Submit signed transfer |
| GET | `/layer2/:appId/transfer/:txId` | Get transfer details |

#### Withdraw
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/withdraw/build` | Build withdraw request |
| POST | `/layer2/:appId/withdraw/submit` | Submit withdraw |
| GET | `/layer2/:appId/withdraw/pending` | Get pending withdrawals |
| GET | `/layer2/:appId/withdraw/contract/:id` | Get contract withdraw |
| GET | `/layer2/:appId/withdraw/:txId` | Get withdraw details |
| POST | `/layer2/:appId/withdraw/:txId/accept` | Accept withdraw |
| POST | `/layer2/:appId/withdraw/:txId/confirm/build` | Build delivery confirm |
| POST | `/layer2/:appId/withdraw/:txId/confirm/submit` | Submit delivery confirm |
| POST | `/layer2/:appId/withdraw/:txId/cancel` | Cancel withdraw |

#### Order
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/order/build` | Build order transaction |
| POST | `/layer2/:appId/order/submit` | Submit order |
| GET | `/layer2/:appId/order/:orderId` | Get order details |

#### Account
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/account/create` | Create Hedera account |

#### Topic (HCS)
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/topic/create` | Create HCS topic |
| POST | `/layer2/:appId/topic/message/build` | Build topic message |
| POST | `/layer2/:appId/topic/message/submit` | Submit topic message |

#### Token
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/token/allowance/build` | Build token allowance |
| POST | `/layer2/:appId/token/allowance/submit` | Submit token allowance |

#### Crypto
| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/layer2/:appId/crypto/decrypt` | Decrypt messages |
| POST | `/layer2/:appId/crypto/encrypt` | Encrypt message |
| POST | `/layer2/:appId/topic/messages/decrypt` | Get decrypted topic messages |
| POST | `/layer2/:appId/topic/message/encrypt-build` | Build encrypted topic message |

#### System
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | `/health` | Health check |
| GET | `/layer2/:appId/transactions` | Get all transactions |

### Per-Service Endpoints (Backend)

Each of the 14 backend services exposes endpoints via HTTP POST with event bus routing. Common pattern:

```
POST /RegisterMerchant
POST /Login
POST /GetShopData
POST /UpdateShop
POST /CreateOrder
POST /GetOrders
POST /UpdateOrderStatus
POST /CreateHub
POST /GetHubs
POST /AssignToHub
POST /RegisterDriver
POST /GetDrivers
POST /GetLedger
POST /CreateTicket
POST /GetMarkets
...
```
