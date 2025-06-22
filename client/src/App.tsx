import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Layout from './components/layout/Layout';
import AuthLayout from './components/layout/AuthLayout';
// import LoadingSpinner from './components/common/LoadingSpinner'; // Removed unused import
import ProtectedRoute from './components/common/ProtectedRoute';
import { Mirage } from 'ldrs/react';
import 'ldrs/react/Mirage.css';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const ArtworkDetail = lazy(() => import('./pages/ArtworkDetail'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./components/auth/Register'));
const About = lazy(() => import('./pages/About'));
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const ArtworkManager = lazy(() => import('./pages/admin/ArtworkManager'));
const Contact = lazy(() => import('./pages/Contact'));

function App() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center h-screen">
        <Mirage size="80" speed="2.5" color="white" />
      </div>
    }>
      <Routes>
        {/* Authentication routes with AuthLayout (no navbar) */}
        <Route path="/" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Main routes with Layout (includes navbar) */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="artwork/:id" element={<ArtworkDetail />} />
          
          {/* Admin Routes */}
          <Route path="admin" element={<ProtectedRoute />}>
            <Route index element={<Dashboard />} />
            <Route path="artworks" element={<ArtworkManager />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App; 