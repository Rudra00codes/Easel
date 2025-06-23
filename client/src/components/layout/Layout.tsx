import { Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleSidebar } from '@/store/slices/uiSlice';
import Sidebar from './Sidebar';
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarButton,
  NavbarLogo
} from '../eldoraui/Navbar';
import { FiMenu } from 'react-icons/fi';
import { useEffect } from 'react';

const navLinks = [
  { name: 'Home', link: '/' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'Marketplace', link: '/marketplace' },
  { name: 'About', link: '/about' },
  { name: 'Contact', link: '/contact' },
];

const MobileNavBar = ({ onMenuClick }: { onMenuClick: () => void }) => (
  <div className="flex items-center justify-between px-4 py-3 bg-black/80 backdrop-blur sticky top-0 z-30 lg:hidden">
    <div className="flex items-center">
      <img src="/easel-icon.svg" alt="Easel Logo" className="h-8 w-8 mr-2" />
      <span className="text-xl font-bold text-white">Easel</span>
    </div>
    <button
      onClick={onMenuClick}
      className="p-2 rounded-md text-white hover:text-gray-300 focus:outline-none"
      aria-label="Open menu"
    >
      <FiMenu className="h-7 w-7" />
    </button>
  </div>
);

const Layout = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  // Prevent background scroll when sidebar is open (mobile)
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>

      {/* Desktop Animated Navbar */}
      <div className="hidden lg:block relative z-20 sticky top-0">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navLinks} />
            {!isAuthenticated && (
              <NavbarButton href="/register">Sign Up</NavbarButton>
            )}
          </NavBody>
        </Navbar>
      </div>

      {/* Mobile Top Bar */}
      <MobileNavBar onMenuClick={() => dispatch(toggleSidebar())} />

      {/* Mobile Menu Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998] lg:hidden"
          onClick={() => dispatch(toggleSidebar())}
        />
      )}

      {/* Mobile Sidebar */}
      <div className="lg:hidden relative z-[11000] pointer-events-auto">
        <Sidebar />
      </div>

      <div className="relative z-10">
        <main className="md:ml-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 