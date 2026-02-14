# 2bb2-merchant — Merchant Dashboard

**Path:** `/home/planet-9/2bb2/2bb2-merchant/`
**Stack:** Vue 3 + TypeScript + Capacitor + Tailwind CSS
**Dev Port:** 5173
**Feature Modules:** 17
**TEU:** 283 | **Value:** $42,450

## Feature Inventory

### Authentication & Onboarding (34 TEU — $5,100)
- Multi-step Merchant Registration
- Pre-onboarding Flow
- OTP Verification
- Hedera Wallet Integration
- JWT + Token Refresh Service

### Dashboard & Analytics (16 TEU — $2,400)
- Merchant Dashboard with business overview
- Business Analytics and metrics

### Shop Management (47 TEU — $7,050)
- Menu Item CRUD (create, read, update, delete)
- Menu Sections & Sub-sections
- Add-ons / Ingredients Management
- AI-Powered Menu Creation (OpenAI integration)
- Shop Availability Scheduling
- Shop Tags / Categorization
- Image Upload to AWS S3

### Order Management (23 TEU — $3,450)
- Order Processing Pipeline
- Order Status Management (workflow)
- Pool Management
- Order Analytics (Top Items, Top Clients)

### Delivery System (29 TEU — $4,350)
- Delivery Request Creation
- Real-time Driver Availability Tracking
- Wolt Drive Integration
- Delivery Charge Calculation

### Wallet & Financial (36 TEU — $5,400)
- Wallet Details view
- Invoices System
- Client Management
- Payment Processing (Cash + 2bb2 tokens)
- Ledger / Transaction History

### Communication (18 TEU — $2,700)
- Order Notifications
- Push Notifications (Pushy/FCM)
- Inbox System

### Hub Management (10 TEU — $1,500)
- Hub Selection & Configuration
- Hub Analytics

### Promotions (18 TEU — $2,700)
- Full CRUD for promotions
- Promotion Item Selection with menu items
- Encrypted Route Arguments for security

### Core Infrastructure (52 TEU — $7,800)
- Vue 3 Monorepo with 17 feature modules
- Clean Architecture (Data/Domain/Presentation)
- UI Component Library (32 components including OTP, Upload, SearchBar, CircularProgressBar)
- Token Refresh Service
- Capacitor Mobile Bridge

## 17 Feature Modules
`auth` · `dashboard` · `delivery` · `hub` · `inbox` · `landing` · `ledger` · `notifications` · `order` · `otp` · `payment` · `portal` · `preonboarding` · `promotions` · `shop` · `wallet`

## UI Components (32)
Modal, SvgLoadingView, ButtonScrollableSection, Button, ButtonScrollableSectionDraggable, Card, ButtonsScrollable, AutoCompleteLocation, DateTextField, Notification, ButtonNormal, AutoComplete, ButtonNoHover, FloatingActionButton, CardView, InstalationPrompt, CircularProgressBar, SearchBarView, Dropdown, AutoCompleteTextField, ToastView, TextArea, ImageTitleSubtitleView, TabsView, ChangeLanguageDialog, PasswordInputView, LoadingView, OtpView, BaseScreen, ImagePostView, TextField, UploadImageView
