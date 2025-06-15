import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: {
    orderDate: string;
    deliveryDate: string;
    orderId: string;
    paymentMethod: string;
    items: {
      id: string;
      name: string;
      description: string;
      quantity: number;
      price: number;
      image: string;
    }[];
    subtotal: number;
    discount: number;
    shipmentCost: number;
    grandTotal: number;
  };
}

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({
  isOpen,
  onClose,
  order,
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
            className="bg-neutral-900 rounded-lg shadow-xl p-6 w-full max-w-md border border-neutral-700"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-white">Your Order Details</h2>
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

            {/* Order Summary Header */}
            <div className="grid grid-cols-4 gap-4 text-sm text-gray-400 mb-4 pb-2 border-b border-neutral-700">
              <div>Order Date</div>
              <div>Delivery Date</div>
              <div>Order ID</div>
              <div className="text-right">Payment Method</div>
            </div>
            <div className="grid grid-cols-4 gap-4 text-base font-semibold text-white mb-8">
              <div>{order.orderDate}</div>
              <div>{order.deliveryDate}</div>
              <div>{order.orderId}</div>
              <div className="text-right flex items-center justify-end gap-2">
                {order.paymentMethod === 'Mastercard' && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#FF5F00" xmlns="http://www.w3.org/2000/svg"><path d="M22 6H2V18H22V6ZM20 8H4V16H20V8Z" fill="currentColor" /><path d="M12 10C10.9 10 10 10.9 10 12V14H14V12C14 10.9 13.1 10 12 10Z" fill="#FFCC00" /></svg>
                )}
                {order.paymentMethod}
              </div>
            </div>

            {/* Order Items */}
            <div className="space-y-4 mb-8">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                    <p className="text-sm text-gray-400">{item.description}</p>
                    <p className="text-sm text-gray-400">Qty: {item.quantity}</p>
                  </div>
                  <span className="text-lg font-bold text-white flex-shrink-0">${item.price.toFixed(2)}</span>
                </div>
              ))}
            </div>

            {/* Total Summary */}
            <div className="space-y-2 mb-8 text-white">
              <div className="flex justify-between">
                <span className="text-gray-400">Subtotal</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Discount</span>
                <span className="text-red-400">-${order.discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Shipment cost</span>
                <span>${order.shipmentCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-neutral-700">
                <span>Grand Total</span>
                <span>${order.grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Continue Shopping Button */}
            <div className="flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors w-full"
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 