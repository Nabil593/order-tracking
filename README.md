# Order Tracking Screen

A modern, responsive mobile Order Tracking experience for an e-commerce application.

This project was built as part of a Frontend Developer Practical Assessment. The goal is to redesign the delivery tracking experience so customers can clearly understand their order status and take appropriate actions when something goes wrong.

## Live Demo

[View Live Demo](YOUR_DEPLOYED_URL)

## GitHub Repository

[View Repository](YOUR_GITHUB_REPOSITORY_URL)

---

## Features

- Modern mobile-first Order Tracking UI
- Responsive design for 360px–430px mobile widths
- Clear visual delivery timeline
- Current order status with contextual messaging
- Estimated delivery date and time
- Product and order summary
- Contact support interaction
- Report delivery issue interaction
- Loading state while refreshing tracking information
- Three required delivery scenarios
- Reusable React components
- Mock/static data without backend dependency

---

## Supported Order States

### 1. Delayed Order

Clearly communicates that the delivery is delayed and provides an appropriate next step for the customer.

### 2. Delivered but Not Received

Handles cases where the carrier marks the order as delivered but the customer cannot find the package. The interface provides support and issue-reporting actions.

### 3. Tracking Not Available Yet

Provides a meaningful experience when tracking information is not available instead of showing an empty or broken screen.

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React
- Next/Image
- Vercel

---

## Project Structure

```text
order-tracking/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   │
│   ├── order-header.tsx
│   ├── status-card.tsx
│   ├── delivery-timeline.tsx
│   ├── order-summary.tsx
│   ├── support-actions.tsx
│   └── issue-dialog.tsx
│
├── data/
│   └── orders.ts
│
├── types/
│   └── order.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│
├── AI_PROMPT_HISTORY.txt
├── README.md
├── package.json
├── next.config.ts
└── tsconfig.json
````

---

## Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Go to the project directory:

```bash
cd order-tracking
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Available Scripts

```bash
npm run dev
```

Runs the development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server.

```bash
npm run lint
```

Runs ESLint checks.

---

## Interaction

The interface includes a scenario switcher that allows the evaluator to preview:

* Delayed
* Delivered but Not Received
* Tracking Unavailable

Additional interactions include:

* Back navigation
* Contact support
* Report a delivery issue
* Retry tracking
* View order details
* Loading feedback

---

## Design Approach

The UI follows a mobile-first approach with emphasis on:

* Clear visual hierarchy
* Strong status communication
* Accessible spacing and typography
* Contextual feedback
* Consistent component design
* Responsive behavior
* Meaningful customer actions

The main tracking experience is implemented as a reusable state-driven interface so the same product experience can adapt to different delivery situations.

---

## Data

This assessment uses mock/static order data.

No backend or external API integration is required.

The order scenarios are defined in:

```text
data/orders.ts
```

Shared TypeScript types are defined in:

```text
types/order.ts
```

---

## AI Usage

AI tools were used during development to assist with implementation, debugging, component architecture, and UI development.

All prompts used during the assessment are documented in:

```text
AI_PROMPT_HISTORY.txt
```

---

## Deployment

The application can be deployed using Vercel.

Build command:

```bash
npm run build
```

Start command:

```bash
npm run start
```

---

## Assessment Requirements Covered

* [x] Delivery progress/timeline
* [x] Current order status
* [x] Estimated delivery date/time
* [x] Order/product summary
* [x] Contact support
* [x] Loading state
* [x] Error/delivery issue handling
* [x] Responsive 360px–430px mobile layout
* [x] Meaningful interactions
* [x] Delayed Order state
* [x] Delivered but Not Received state
* [x] Tracking Not Available Yet state
* [x] Mock/static data
* [x] GitHub repository
* [x] README setup instructions

````
