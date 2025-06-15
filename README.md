# MyArtVibe

A modern web application for artists to showcase and sell their artwork, built with React, TypeScript, and Vite.

## Features

- User authentication with Google OAuth
- Artwork marketplace
- Artist profiles
- Secure checkout process
- Responsive design

## Tech Stack

- Frontend: React, TypeScript, Vite
- State Management: Redux Toolkit
- Styling: Tailwind CSS
- Authentication: Google OAuth
- Deployment: Vercel

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/myartvibe.git
cd myartvibe
```

2. Install dependencies:
```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

3. Set up environment variables:
   - Create `.env` files in both client and server directories
   - Add necessary environment variables (see `.env.example` files)

4. Start the development servers:
```bash
# Start server (from server directory)
npm run dev

# Start client (from client directory)
npm run dev
```

## Development

- Client runs on: http://localhost:5173
- Server runs on: http://localhost:5000

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
