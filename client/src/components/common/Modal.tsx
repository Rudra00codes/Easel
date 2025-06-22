import { ReactNode, useEffect } from 'react';
import { FiX } from 'react-icons/fi';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showCloseButton?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  showCloseButton = true,
  className = '',
}: ModalProps) => {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-40 transition-opacity"
        onClick={onClose}
      />
      {/* Modal */}
      <div className={`relative w-full ${sizeClasses[size]} mx-auto rounded-lg bg-white dark:bg-gray-800 p-6 shadow-xl transition-all ${className}`}>
        {title && (
          <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white mb-4">
            {title}
          </h3>
        )}
        {showCloseButton && (
          <button
            type="button"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            onClick={onClose}
          >
            <FiX className="h-5 w-5" />
          </button>
        )}
        {children}
      </div>
    </div>
  );
};

export default Modal; 