# Deployment Status

## Current Environments

| Environment | Domain | Status |
|-------------|--------|--------|
| 2bb2 Production | genesis.2bb2.io | Active |
| TYQA | tyqa.app / app.tyqa.io | Active (isolated fork) |
| Local Dev | localhost:5173-5175 | Development |

## Apps to Deploy (Demo Day)

| App | Target | Port | Status |
|-----|--------|------|--------|
| 2bb2-merchant | AWS EC2/ECS | 443 | Planned |
| 2bb2-client | AWS EC2/ECS | 443 | Planned |
| 2bb2-driver | AWS EC2/ECS | 443 | Planned |
| admin_orders_portal | AWS EC2/ECS | 443 | Planned |
| 2bb2-menu | AWS EC2/ECS | 443 | Planned |

## Backend Services

| Service | Port | Status |
|---------|------|--------|
| BE_MerchantAuth | 8080 | Active |
| BE_ClientAuth | 8081 | Active |
| BE_Authentication | 8080 | Active |
| BE_Hub | 8080 | Active |
| BE_Orders | 8080 | Active |
| BE_Markets | 8080 | Active |
| BE_Ledger | 8080 | Active |
| BE_Tickets | 8080 | Active |
| BE_Drivers | 8080 | Active |
| BE_HederaTransactions | 8080 | Active |
| BE_LandingPortal | 8080 | Active |
| layer2-hedera-service | 8080 | Active |

## Infrastructure

| Component | Provider | Region |
|-----------|----------|--------|
| Database | AWS Keyspaces | eu-west-3 (primary), eu-west-1 (shadow) |
| File Storage | AWS S3 | eu-west-3 |
| Container Registry | AWS ECR | eu-west-3 |
| Compute | AWS EC2/ECS | eu-west-3 |
| Blockchain | Hedera | Testnet / Mainnet |
