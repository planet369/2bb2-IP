# Backend Services

## Service Inventory

All services: **Java 11 + Vert.x 4.5.9** | **AWS Keyspaces** | **JWT Auth** | **Docker**

### Authentication Services

#### BE_MerchantAuth
- Merchant registration and login
- Shop CRUD operations
- Merchant role management
- JWT token issuance

#### BE_ClientAuth
- Client registration
- Client verification (OTP)
- Client login

#### BE_Authentication
- Core JWT token management
- Token refresh
- Token validation
- Cross-service auth

### Business Logic Services

#### BE_Hub
- Hub creation and management
- Driver/merchant assignment to hubs
- Hub analytics

#### BE_Orders
- Order creation pipeline
- Order status management (workflow)
- Order tracking
- Order analytics

#### BE_Markets
- Market and shop listing
- Category-based shop discovery
- Market operations

#### BE_Ledger
- Transaction ledger management
- Ledger entry creation
- Transaction history queries

#### BE_Tickets
- Ticket creation (delivery, pickup, order)
- Ticket status management
- Ticket queries

#### BE_Drivers
- Driver registration
- Driver assignment
- Driver tracking
- Driver analytics

### Integration Services

#### BE_HederaTransactions
- Hedera account creation
- ED25519 signature verification
- Public key management
- Blockchain transaction verification

#### BE_LandingPortal
- Landing page data
- Announcements
- Public content

#### BE_Notifications
- Push notification dispatch (FCM/Pushy)
- SMS via Twilio
- WhatsApp messaging

#### BE_Payments
- Payment processing
- Cash payment handling
- 2bb2 token payments

## Infrastructure per Service

Each service includes:
- `MainVerticle.java` — Entry point, deploys all verticles
- `ServerRequests.java` — HTTP router, CORS, JWT validation
- `CassandraConnect.java` — Primary DB connection (eu-west-3)
- `CassandraConnectShadow.java` — Shadow DB (eu-west-1)
- `Dockerfile` — Container configuration
- `pom.xml` — Maven build with fat JAR output

## Event Bus Communication Pattern

```java
// ServerRequests.java — HTTP endpoint
router.post("/GetShopData").handler(ctx -> {
    JsonObject body = ctx.body().asJsonObject();
    vertx.eventBus().request("shop.getData", body, reply -> {
        ctx.response()
           .putHeader("content-type", "application/json")
           .end(reply.result().body().toString());
    });
});

// ShopVerticle.java — Business logic
vertx.eventBus().consumer("shop.getData", message -> {
    JsonObject request = (JsonObject) message.body();
    PreparedStatement ps = session.prepare(
        "SELECT * FROM " + CassandraConnect.keyspace("markets") + ".shop_info WHERE shop_id = ?"
    );
    // Execute and reply
    message.reply(result);
});
```

## Database Connection Pattern

```java
// SigV4 authentication with SSL
Session session = Cluster.builder()
    .addContactPoint("cassandra.eu-west-3.amazonaws.com")
    .withPort(9142)
    .withAuthProvider(new SigV4AuthProvider("eu-west-3"))
    .withSSL()
    .withQueryOptions(new QueryOptions()
        .setConsistencyLevel(ConsistencyLevel.LOCAL_QUORUM))
    .build()
    .connect();
```
