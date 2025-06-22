import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: {
    id: string;
    name: string;
    description: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  cartItems,
}) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [couponCode, setCouponCode] = useState('');

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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 50.00; // Example shipping cost
  const discount = 0.00; // Placeholder for actual discount logic
  const totalPayable = subtotal + shippingCost - discount;

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
            className="bg-neutral-900 rounded-lg shadow-xl p-6 w-full max-w-3xl border border-neutral-700 grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Shopping Cart Section */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Shopping Cart</h2>
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

              {/* Product List */}
              <div className="space-y-4 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 bg-neutral-800 p-4 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-grow grid grid-cols-3 items-center gap-4">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20">-</button>
                        <span className="text-white">{item.quantity}</span>
                        <button className="px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20">+</button>
                      </div>
                      <div className="text-right text-lg font-bold text-white">${item.price.toFixed(2)}</div>
                    </div>
                    <button className="text-red-400 hover:text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"/></svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Coupon Code and Total */}
              <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <label htmlFor="coupon" className="text-gray-400 text-sm">Coupon Code</label>
                  <input
                    type="text"
                    id="coupon"
                    placeholder="Enter discount code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="px-4 py-2 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                  />
                  <button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors mt-2">Apply</button>
                </div>

                <div className="text-white space-y-2 w-full md:w-auto text-right">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Shipping Cost</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Discount</span>
                    <span className="text-red-400">-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold mt-4 pt-4 border-t border-neutral-700">
                    <span>Total Payable</span>
                    <span>${totalPayable.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Info Section */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Payment Info</h2>

              {/* Payment Method Radio Buttons */}
              <div className="space-y-4 mb-6">
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-white">Credit Card</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-white">PayPal</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cashOnDelivery"
                    checked={paymentMethod === 'cashOnDelivery'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-white">Cash on Delivery</span>
                </label>
              </div>

              {/* Credit Card Details (Conditional) */}
              {paymentMethod === 'creditCard' && (
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardName" className="block text-sm font-medium text-gray-300 mb-2">Name on Card:</label>
                    <input
                      type="text"
                      id="cardName"
                      placeholder="John Doe"
                      className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-300 mb-2">Card Number:</label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="0000 0000 0000 0000"
                      className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="expMonth" className="block text-sm font-medium text-gray-300 mb-2">Expiration Date:</label>
                      <input
                        type="text"
                        id="expMonth"
                        placeholder="MM"
                        className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="expYear" className="block text-sm font-medium text-gray-300 mb-2">&nbsp;</label>
                      <input
                        type="text"
                        id="expYear"
                        placeholder="YYYY"
                        className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-300 mb-2">CVV:</label>
                      <input
                        type="text"
                        id="cvv"
                        placeholder="123"
                        className="w-full p-3 rounded-md bg-neutral-800 border border-neutral-700 text-white focus:ring focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Place Order Button */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    // Handle place order logic here
                    onClose();
                  }}
                  className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors w-full"
                >
                  Place Order
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 