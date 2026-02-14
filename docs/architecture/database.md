# Database Architecture

## AWS Keyspaces (Cassandra)

**Region:** eu-west-3 (primary) | eu-west-1 (shadow/ledger)
**Auth:** SigV4 + SSL (port 9142)
**Consistency:** LOCAL_QUORUM
**TEU:** 63 | **Value:** $9,450

## Keyspaces

| Keyspace | Purpose | Primary Tables |
|----------|---------|---------------|
| `markets` | Shop and merchant data | shop_info, merchant_info, menu_items, sections |
| `markets_client_app` | Client orders and app data | orders, clients, order_status |
| `markets_ledger` | Transaction ledger | ledger_entries, transaction_history |
| `socials` | Blogs and announcements | blog_posts, announcements |
| `accounting` | Invoices | invoices, payment_records |
| `contracts` | Hedera accounts | hedera_accounts, public_keys |
| `istithmari` | Email verification | verification_codes, email_tokens |
| `market_tickets` | Ticketing | tickets, ticket_status |

## Layer 2 Service Schema (20 Tables)

### Transaction Tables
```sql
CREATE TABLE app_config (
    app_id TEXT PRIMARY KEY,
    payer_account_id TEXT,
    token_id TEXT,
    treasury_account_id TEXT,
    is_active BOOLEAN
);

CREATE TABLE transactions (
    tx_id UUID PRIMARY KEY,
    app_id TEXT,
    sender_account_id TEXT,
    receiver_account_id TEXT,
    amount DECIMAL,
    status TEXT,
    hedera_tx_id TEXT,
    consensus_timestamp TIMESTAMP
);

CREATE TABLE transactions_by_user (
    user_account_id TEXT,
    app_id TEXT,
    tx_id UUID,
    timestamp TIMESTAMP,
    PRIMARY KEY ((user_account_id, app_id), timestamp)
) WITH CLUSTERING ORDER BY (timestamp DESC);
```

### Accounting Tables
```sql
CREATE TABLE entity_registry (
    entity_id UUID PRIMARY KEY,
    entity_type TEXT,     -- HUB, FLEET, MERCHANT, DRIVER
    parent_entity_id UUID,
    hedera_account_id TEXT,
    app_id TEXT
);

CREATE TABLE fee_distribution_rules (
    app_id TEXT,
    transaction_type TEXT,
    entity_type TEXT,
    percentage DECIMAL,
    PRIMARY KEY ((app_id, transaction_type), entity_type)
);

CREATE TABLE account_ledger (
    entity_id UUID,
    currency TEXT,
    running_balance DECIMAL,
    last_updated TIMESTAMP,
    PRIMARY KEY (entity_id, currency)
);
```

## Query Patterns

All queries use **prepared statements** to prevent injection:

```java
PreparedStatement ps = session.prepare(
    "SELECT * FROM " + CassandraConnect.keyspace("markets")
    + ".shop_info WHERE shop_id = ?"
);
BoundStatement bs = ps.bind(shopId);
ResultSet rs = session.execute(bs);
```

### Dynamic Keyspace Helper
```java
// Enables environment isolation (2bb2 vs TYQA)
public static String keyspace(String name) {
    String prefix = System.getenv("APP_ID");
    if ("tyqa".equals(prefix)) {
        return "tyqa_" + name;
    }
    return name;
}
```

## Multi-Region Setup
- **Primary (eu-west-3):** All read/write operations
- **Shadow (eu-west-1):** Ledger data, cross-region reads
- Both connections use SigV4 auth with SSL
