import { useEffect } from 'react';
import {
  FiCheckCircle,
  FiAlertCircle,
  FiInfo,
  FiXCircle,
  FiX,
} from 'react-icons/fi';

export type ToastType = 'success' | 'error' | 'info' | 'warning';

interface ToastProps {
  type: ToastType;
  message: string;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

const Toast = ({
  type,
  message,
  isVisible,
  onClose,
  duration = 5000,
}: ToastProps) => {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: FiCheckCircle,
    error: FiXCircle,
    info: FiInfo,
    warning: FiAlertCircle,
  };

  const colors = {
    success: 'bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200',
    error: 'bg-red-50 text-red-800 dark:bg-red-900 dark:text-red-200',
    info: 'bg-blue-50 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    warning: 'bg-yellow-50 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  };

  const Icon = icons[type];

  if (!isVisible) return null;

  return (
    <div
      aria-live="assertive"
      className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50"
    >
      <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
        <div
          className={`max-w-sm w-full ${colors[type]} shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden transition-all duration-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="ml-3 w-0 flex-1 pt-0.5">
                <p className="text-sm font-medium">{message}</p>
              </div>
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  type="button"
                  className={`inline-flex text-${type}-400 hover:text-${type}-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${type}-500`}
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <FiX className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toast; 