import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AdvancedFilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdvancedFilterModal: React.FC<AdvancedFilterModalProps> = ({
  isOpen,
  onClose,
}) => {
  const modalVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose} // Close when clicking outside
        >
          <motion.div
            className="bg-neutral-900 rounded-lg shadow-xl p-6 w-full max-w-4xl border border-neutral-700"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Advanced Filter</h2>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Price Range</label>
                <select className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Price</option>
                  <option>$0 - $100</option>
                  <option>$101 - $500</option>
                  <option>$501 - $1000</option>
                  <option>$1000+</option>
                </select>
              </div>

              {/* Artists (formerly Brands) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Artists</label>
                <select className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Artist</option>
                  <option>Artist A</option>
                  <option>Artist B</option>
                  <option>Artist C</option>
                </select>
              </div>

              {/* Customer Rating (can be adapted to Popularity/Likes) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Popularity</label>
                <select className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Rating</option>
                  <option>Most Liked</option>
                  <option>Most Viewed</option>
                  <option>Recently Added</option>
                </select>
              </div>

              {/* Medium/Style (formerly Storage Capacity) */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Medium/Style</label>
                <select className="w-full p-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500">
                  <option>Select Medium</option>
                  <option>Oil Painting</option>
                  <option>Digital Art</option>
                  <option>Photography</option>
                  <option>Sculpture</option>
                </select>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button
                onClick={onClose}
                className="px-6 py-2 rounded-md bg-gray-700 text-white hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  // Handle filter apply logic here
                  onClose();
                }}
                className="px-6 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Apply Filters
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 