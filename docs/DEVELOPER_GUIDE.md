# MyArtVibe Developer Guide

## Table of Contents
1. [Development Environment Setup](#development-environment-setup)
2. [Architecture Overview](#architecture-overview)
3. [Backend Development](#backend-development)
4. [Frontend Development](#frontend-development)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Best Practices](#best-practices)

## Development Environment Setup

### Required Tools
- Node.js (v18 or higher)
- MongoDB Compass
- Git
- VS Code (recommended)
- Postman (for API testing)

### Environment Variables
Create `.env` files in both server and client directories:

#### Server (.env)
```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:5000/api/auth/google/callback
FRONTEND_URL=http://localhost:3000
```

#### Client (.env)
```env
VITE_API_URL=http://localhost:5000/api
VITE_GOOGLE_CLIENT_ID=your_google_client_id
```

## Architecture Overview

### Backend Architecture
The backend follows a modular architecture with the following components:

1. **Models**: Mongoose schemas for data structure
2. **Routes**: API endpoint definitions
3. **Controllers**: Business logic implementation
4. **Middleware**: Request processing and authentication
5. **Services**: External service integrations (Stripe, etc.)

### Frontend Architecture
The frontend uses a component-based architecture with:

1. **Components**: Reusable UI elements
2. **Pages**: Route-based components
3. **Store**: Redux state management
4. **Services**: API integration
5. **Utils**: Helper functions

## Backend Development

### Database Schema

#### User Model
```typescript
interface IUser {
  email: string;
  password?: string;
  googleId?: string;
  name: string;
  role: 'admin' | 'user';
  createdAt: Date;
  updatedAt: Date;
}
```

#### Artwork Model
```typescript
interface IArtwork {
  title: string;
  description: string;
  price: number;
  medium: string;
  dimensions: {
    width: number;
    height: number;
    unit: string;
  };
  year: number;
  category: string;
  tags: string[];
  images: string[];
  video?: string;
  status: 'available' | 'sold' | 'exhibition';
  featured: boolean;
}
```

### API Endpoints

#### Authentication
- `GET /api/auth/google` - Initiate Google OAuth
- `GET /api/auth/google/callback` - Google OAuth callback
- `GET /api/auth/me` - Get current user

#### Artworks
- `GET /api/artworks` - List artworks (with filtering)
- `GET /api/artworks/:id` - Get single artwork
- `POST /api/artworks` - Create artwork (admin)
- `PUT /api/artworks/:id` - Update artwork (admin)
- `DELETE /api/artworks/:id` - Delete artwork (admin)

## Frontend Development

### Component Structure

```
src/
├── components/
│   ├── common/           # Shared components
│   ├── layout/           # Layout components
│   ├── artwork/          # Artwork-related components
│   └── admin/            # Admin dashboard components
├── pages/
│   ├── Home.tsx
│   ├── Gallery.tsx
│   ├── ArtworkDetail.tsx
│   └── admin/
│       ├── Dashboard.tsx
│       └── ArtworkManager.tsx
└── store/
    ├── slices/           # Redux slices
    └── index.ts          # Store configuration
```

### State Management
We use Redux Toolkit for state management. Key slices:

1. **authSlice**: Authentication state
2. **artworkSlice**: Artwork data and filters
3. **cartSlice**: Shopping cart functionality
4. **uiSlice**: UI state (loading, errors, etc.)

### Styling
- TailwindCSS for utility-first styling
- Custom components in `components/common`
- Responsive design using Tailwind breakpoints

## Testing

### Backend Testing
```bash
# Run all tests
npm test

# Run specific test file
npm test -- path/to/test.ts

# Run tests with coverage
npm test -- --coverage
```

### Frontend Testing
```bash
# Run unit tests
npm test

# Run component tests
npm test -- components

# Run e2e tests
npm run test:e2e
```

## Deployment

### Frontend (Vercel)
- The frontend is deployed on Vercel. See [`deploy/vercel-deployment.md`](../deploy/vercel-deployment.md) for details.
- Set environment variables in the Vercel dashboard (e.g., `VITE_API_URL`).

### Backend (External Hosting)
- The backend (Node/Express) should be deployed to a service like Render, Railway, or Heroku.
- Set all required environment variables in your host's dashboard (see code for required variables).
- Update CORS and API URLs as needed for production.

## Best Practices

### Code Style
- Follow TypeScript best practices
- Use ESLint and Prettier
- Write meaningful commit messages
- Document complex functions and components

### Security
- Never commit sensitive data
- Use environment variables
- Implement proper authentication
- Sanitize user input
- Use HTTPS in production

### Performance
- Optimize images
- Implement lazy loading
- Use proper indexing in MongoDB
- Cache frequently accessed data

### Git Workflow
1. Create feature branch
2. Make changes
3. Write tests
4. Create pull request
5. Code review
6. Merge to main

## Troubleshooting

### Common Issues

1. **MongoDB Connection**
   - Check connection string
   - Verify network access
   - Check MongoDB Atlas IP whitelist

2. **Google OAuth**
   - Verify client ID and secret
   - Check callback URL
   - Ensure proper redirect URI

3. **Build Issues**
   - Clear node_modules and reinstall
   - Check TypeScript errors
   - Verify environment variables

## Support

For additional support:
- Check the [README.md](../README.md)
- Open an issue in the repository
- Contact the development team 