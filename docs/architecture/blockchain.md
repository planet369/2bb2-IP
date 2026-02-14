# Blockchain / Hedera Integration

## Overview

The 2bb2 platform integrates with Hedera Hashgraph at three levels:

1. **Smart Contracts** — On-chain business logic for orders, pickups, and escrow
2. **Layer 2 Service** — Meta-transaction service (users sign, backend pays HBAR)
3. **Stablecoin Studio** — Enterprise stablecoin management platform

## Smart Contracts (2bb2Contracts)

**Path:** `/home/planet-9/2bb2/2bb2Contracts/`
**Stack:** Solidity 0.8.21 + Hardhat
**TEU:** 87 | **Value:** $13,050

| Contract | Purpose | Key Features |
|----------|---------|-------------|
| `OrderP2PTD.sol` | P2P orders with fee distribution | Percentage-based splits (merchant, service, gas) |
| `OrderP2P.sol` | Basic P2P orders | Direct merchant-client transactions |
| `PickupP2P.sol` | Pickup transactions v1 | 3-party: client, merchant, driver |
| `PickUpP2PV2.sol` | Pickup transactions v2 | Enhanced with operator support |
| `TopicP2P.sol` | Order messaging | HCS-based topic messages |
| `WithdrawEscrow.sol` | Cash withdrawal escrow | 24hr timeout, 3 attempt limit, delivery codes |

### Contract Architecture
- Multi-party transaction flows (client → merchant → driver → operator)
- Tiered fee structure with configurable percentages
- HTS integration for custom token operations
- Struct-based data models for orders, merchants, clients

## Layer 2 Hedera Service

**Path:** `/home/planet-9/2bb2/apis/layer2-hedera-service/`
**Stack:** Java 11 + Vert.x 4.5.9 + Hedera SDK 2.64.0
**TEU:** 186 | **Value:** $27,900

### Transaction Flow

```
1. BUILD    Frontend → /layer2/{appId}/transfer/build
            ← txBytesBase64 + builderToken (HMAC)

2. SIGN     User signs with wallet private key (client-side)

3. SUBMIT   Frontend → /layer2/{appId}/transfer/submit
            Service verifies HMAC → adds payer signature → submits to Hedera
            ← consensus timestamp + receipt
```

### Core Services

| Service | Purpose |
|---------|---------|
| `TransactionBuilderService` | Builds unsigned Hedera transactions |
| `TransactionSubmissionService` | Adds payer sig + submits |
| `WithdrawService` | Cash withdrawal escrow |
| `WithdrawContractService` | Smart contract withdraw ops |
| `OrderService` | Order transaction management |
| `AccountService` | Account balance & info |
| `TokenAllowanceService` | Token approval management |
| `TopicService` | HCS topic operations |
| `CryptoService` | Encrypt/decrypt for HCS |
| `MirrorNetworkService` | Real-time balance queries |
| `HederaClientManager` | Multi-app client management |

### Multi-Tenant Architecture

```
App "2bb2"           App "ride-sharing"
  Payer: 0.0.AAA       Payer: 0.0.BBB
  Token: 0.0.111       Token: 0.0.222
  Treasury: 0.0.XXX    Treasury: 0.0.YYY
       ↓                     ↓
    ┌──────────────────────────┐
    │  Layer 2 Hedera Service  │
    │  (Single Deployment)     │
    └──────────────────────────┘
```

### API Endpoints (28)

**Transfer:** build, submit, get
**Withdraw:** build, submit, get, pending, accept, confirm/build, confirm/submit, cancel, contract/:id
**Order:** build, submit, get
**Account:** create
**Topic:** create, message/build, message/submit
**Token:** allowance/build, allowance/submit
**Crypto:** decrypt, encrypt, messages/decrypt, encrypt-build
**System:** health, transactions

### Database (20 Tables)

**Transaction:** app_config, transactions, transactions_by_user, transactions_by_status, user_balances, balance_history

**Accounting:** entity_registry, entity_lookup, fee_distribution_rules, transaction_splits, transaction_splits_by_entity, account_ledger, accounting_periods, payment_events

**System:** treasury_accounts, reconciliation_log, pricing_config, rate_limits, transaction_receipts, system_config

## Stablecoin Studio

**Path:** `/home/planet-9/2bb2/stablecoin-studio/`
**TEU:** 186 | **Value:** $27,900

### 5 Modules

| Module | Stack | Purpose |
|--------|-------|---------|
| **Contracts** | Solidity 0.8.16 | Diamond proxy pattern with 12 facets |
| **Backend** | NestJS + TypeORM | Multi-sig transaction management |
| **SDK** | TypeScript | JavaScript library for all operations |
| **CLI** | TypeScript | Command-line stablecoin management |
| **Web** | React | DApp for stablecoin operations |

### Smart Contract Facets (12)
BurnableFacet, CashInFacet, FreezableFacet, PausableFacet, WipeableFacet, KYCFacet, RoleManagementFacet, SupplierAdminFacet, RescuableFacet, HoldManagementFacet, CustomFeesFacet, ReserveFacet

### Key Capabilities
- Single-transaction stablecoin deployment (StableCoinFactoryFacet)
- Centralized upgradeable logic (BusinessLogicResolver)
- Proof-of-reserve with Chainlink AggregatorV3Interface
- Multi-signature transaction workflows
- Role-based access: Admin, CashIn, Burn, Wipe, Freeze, Rescue, KYC
- Wallet support: MetaMask, WalletConnect, Hedera WC
