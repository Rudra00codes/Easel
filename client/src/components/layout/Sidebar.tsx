import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { toggleSidebar } from '@/store/slices/uiSlice';
import {
  FiHome,
  FiGrid,
  FiUser,
  FiSettings,
  FiLogOut,
  FiX,
  FiImage,
  FiDollarSign,
  FiUsers,
} from 'react-icons/fi';
import { Button } from "@/components/ui/button";
import React from 'react';

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { isAuthenticated, user } = useSelector((state: RootState) => state.auth);
  const { isSidebarOpen } = useSelector((state: RootState) => state.ui);

  const handleClose = () => {
    dispatch(toggleSidebar());
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: FiHome, label: 'Home' },
    { path: '/gallery', icon: FiGrid, label: 'Gallery' },
    { path: '/about', icon: FiUser, label: 'About' },
    { path: '/contact', icon: FiImage, label: 'Contact' },
    { path: '/marketplace', icon: FiDollarSign, label: 'Marketplace' },
  ];

  const adminItems = [
    { path: '/admin/dashboard', icon: FiHome, label: 'Dashboard' },
    { path: '/admin/artworks', icon: FiImage, label: 'Artworks' },
    { path: '/admin/users', icon: FiUsers, label: 'Users' },
    { path: '/admin/settings', icon: FiSettings, label: 'Settings' },
  ];

  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 z-[11000] w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-xl md:hidden pointer-events-auto`}
        style={{ WebkitBackdropFilter: 'blur(10px)', backdropFilter: 'blur(10px)' }}
      >
        <div className="h-full flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <img src="/easel-icon.svg" alt="Easel Logo" className="h-8 w-8 mr-2" />
              <span className="text-xl font-bold">Easel</span>
            </div>
            <button
              onClick={handleClose}
              className="p-2 rounded-md text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 md:hidden cursor-pointer"
            >
              <FiX className="h-6 w-6" />
            </button>
          </div>

          {isAuthenticated && (
            <div className="p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <FiUser className="h-6 w-6 text-gray-500 dark:text-gray-400" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">{user?.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{user?.email}</p>
                </div>
              </div>
            </div>
          )}

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => dispatch(toggleSidebar())}
                className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                  isActive(item.path)
                    ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}

            {isAuthenticated && user?.role === 'admin' && (
              <>
                <div className="pt-4 mt-4 border-t border-gray-200 dark:border-gray-700">
                  <p className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Admin
                  </p>
                </div>
                {adminItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => dispatch(toggleSidebar())}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium cursor-pointer ${
                      isActive(item.path)
                        ? 'bg-gray-100 text-gray-900 dark:bg-gray-700 dark:text-white'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </Link>
                ))}
              </>
            )}
          </nav>

          {!isAuthenticated && (
            <div className="flex flex-col gap-2 mt-6 md:hidden">
              <Button asChild variant="ghost">
                <Link to="/login" onClick={() => dispatch(toggleSidebar())}>Login</Link>
              </Button>
              <Button asChild>
                <Link to="/register" onClick={() => dispatch(toggleSidebar())}>Sign up</Link>
              </Button>
            </div>
          )}

          {isAuthenticated && (
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => {
                  dispatch({ type: 'auth/logout' });
                  handleClose();
                }}
                className="flex items-center space-x-3 w-full px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
              >
                <FiLogOut className="h-5 w-5" />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default React.memo(Sidebar); 