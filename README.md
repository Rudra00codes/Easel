# Easel

A Single-Artist Art Showcase and Sales Platform built with React, Node.js, and MongoDB.

---

## 🚀 Live Demo
- **Frontend:** [https://easel.vercel.app](https://easel.vercel.app)
- **Backend:** (Deployed separately, e.g., Render/Railway/Heroku)

---

## Overview

MyArtVibe is a modern web application designed to showcase and sell artworks. It provides a personalized digital storefront for artists to present their portfolio with high-resolution images, detailed descriptions, and seamless e-commerce functionality.

---

## Features (Current)
- Portfolio showcase (grid/list views)
- Artwork detail pages
- User authentication (email/password, Google OAuth)
- Responsive design
- Admin dashboard (artwork management)
- Stripe integration (if enabled)
- Advanced search/filtering
- Modern UI with custom font and 3D Spline scene

> **Note:** Some features (e.g., order tracking, analytics) may be in progress.

---

## Tech Stack
- **Frontend:** React, TypeScript, Redux, TailwindCSS, Vite
- **Backend:** Node.js, Express, TypeScript, MongoDB, JWT, Google OAuth
- **Infra:** MongoDB Atlas, Stripe, Vercel (frontend), Render/Railway/Heroku (backend)

---

## Getting Started (Development)

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account
- Google OAuth credentials
- Stripe account (optional)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/myartvibe.git
   cd myartvibe
   ```
2. Install dependencies:
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```
3. Set up environment variables:
   - Create `.env` files in both `server` and `client` directories (see code for required variables).
4. Start the development servers:
   ```bash
   cd server && npm run dev
   cd ../client && npm run dev
   ```

---

## Deployment
See [`deploy/vercel-deployment.md`](deploy/vercel-deployment.md) for step-by-step deployment instructions to Vercel and backend hosting options.

---

## Project Structure

```
myartvibe/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── store/        # Redux store configuration
│   │   ├── services/     # API services
│   │   └── utils/        # Utility functions
│   └── public/           # Static assets
│
├── server/                # Backend Node.js application
│   ├── src/
│   │   ├── config/       # Configuration files
│   │   ├── controllers/  # Route controllers
│   │   ├── middleware/   # Custom middleware
│   │   ├── models/       # Mongoose models
│   │   ├── routes/       # API routes
│   │   └── utils/        # Utility functions
│   └── tests/            # Backend tests
│
└── docs/                 # Documentation
```

## API Documentation
See [`docs/API.md`](docs/API.md) for up-to-date API endpoints and usage.

---

## Contributing, License, Support

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

This project is licensed under the ISC License.

For support, email support@myartvibe.com or open an issue in the repository.
