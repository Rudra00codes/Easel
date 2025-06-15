import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy, useState, useEffect } from 'react';
import Layout from './components/layout/Layout';
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
const Dashboard = lazy(() => import('./pages/admin/Dashboard'));
const ArtworkManager = lazy(() => import('./pages/admin/ArtworkManager'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <Mirage size="80" speed="2.5" color="white" />
  </div>
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingFallback />;
  }

  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="marketplace" element={<Marketplace />} />
          <Route path="artwork/:id" element={<ArtworkDetail />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          
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