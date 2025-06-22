# Vercel Deployment Guide for MyArtVibe

This guide will help you deploy the MyArtVibe web app (React frontend + Node/Express backend) to Vercel, making it live for your resume and portfolio.

---

## 1. Prerequisites
- Vercel account ([vercel.com](https://vercel.com/))
- GitHub/GitLab/Bitbucket account with your project repository
- MongoDB Atlas or other cloud MongoDB instance
- Stripe, Google OAuth, and any other required API credentials

---

## 2. Project Structure
- `/client` — React + Vite frontend
- `/server` — Node.js + Express backend (API)

---

## 3. Preparing for Deployment

### A. Environment Variables
- **Backend:**
  - `MONGODB_URI` — MongoDB connection string
  - `FRONTEND_URL` — The deployed frontend URL (e.g., `https://easel.vercel.app`)
  - Any other secrets (JWT, OAuth, Stripe, etc.) as used in your code
- **Frontend:**
  - API base URL (if needed, e.g., `VITE_API_URL`)
  - Any public keys for third-party services

> **Note:** Review your code and README for all required environment variables. Create `.env` files locally for testing, but set these in Vercel's dashboard for production.

---

## 4. Deploying the Frontend (React/Vite)
1. **Push your code to GitHub/GitLab/Bitbucket.**
2. **Import the repo into Vercel.**
3. **Configure the frontend project:**
   - Set the root directory to `client`.
   - Vercel will auto-detect Vite and use `npm run build` and `dist` as the output.
   - Add any required environment variables in the Vercel dashboard.
4. **Deploy!**

---

## 5. Deploying the Backend (Node/Express API)
### Option 1: Vercel Serverless Functions (Recommended for simple APIs)
- Move your Express API logic into Vercel serverless functions (see Vercel docs for [Node.js API routes](https://vercel.com/docs/functions/serverless-functions)).
- This may require refactoring your Express app into handler functions.
- Set environment variables in the Vercel dashboard.

### Option 2: Deploy as a Separate Service (Recommended for full Express apps)
- Deploy your backend to a service like [Render](https://render.com/), [Railway](https://railway.app/), or [Heroku](https://heroku.com/).
- Set the API base URL in your frontend's environment variables (e.g., `VITE_API_URL`).
- Update CORS settings in your backend to allow requests from your Vercel frontend domain.

---

## 6. Post-Deployment Steps
- **Test the live site:** Ensure all routes, authentication, and API calls work.
- **Set up custom domain:** (Optional) Add a custom domain in Vercel for a professional touch.
- **Monitor logs:** Use Vercel's dashboard for frontend logs; use your backend host's dashboard for API logs.
- **Continue development:** Push new features to your repo; Vercel will auto-deploy previews and production updates.

---

## 7. Tips for Your Resume
- Add your live site URL and GitHub repo link.
- Mention Vercel, React, Node.js, and any other tech in your project description.
- Highlight features you completed and note that the project is live and maintained.

---

## 8. References
- [Vercel Docs](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [Express + Vercel Example](https://vercel.com/guides/deploying-express-with-vercel)

---

**Congratulations! Your project is ready for the world to see.** 