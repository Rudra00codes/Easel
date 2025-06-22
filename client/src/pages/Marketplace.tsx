import { useState } from "react";
import { GradualSpacing } from "../components/eldoraui/GradualSpacing";
// import { SmoothCursor } from "../components/common/SmoothCursor"; // Comment out or remove this import

import { VelocityScroll } from "../components/eldoraui/scrollbasedvelocity";
import ShinyText from "../components/eldoraui/ShinyText";
import { QuickStats } from "../components/common/QuickStats";
import { AdvancedFilterModal } from "../components/common/AdvancedFilterModal";
import { OrderDetailsModal } from "../components/common/OrderDetailsModal";
import { CheckoutModal } from "../components/common/CheckoutModal";

const Marketplace = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const openFilterModal = () => setIsFilterModalOpen(true);
  const closeFilterModal = () => setIsFilterModalOpen(false);

  const openOrderModal = () => setIsOrderModalOpen(true);
  const closeOrderModal = () => setIsOrderModalOpen(false);

  const openCheckoutModal = () => setIsCheckoutModalOpen(true);
  const closeCheckoutModal = () => setIsCheckoutModalOpen(false);

  // Dummy Order Data for demonstration
  const dummyOrder = {
    orderDate: "Jul 11, 2024",
    deliveryDate: "Jul 16, 2024",
    orderId: "#5648945",
    paymentMethod: "Mastercard",
    items: [
      {
        id: "1",
        name: "Regular Fit Jacket",
        description: "Black : M",
        quantity: 1,
        price: 99.00,
        image: "https://images.unsplash.com/photo-1592878772265-4f4f4f4f4f4f", // Placeholder image
      },
      {
        id: "2",
        name: "Printed T-shirt",
        description: "White : S",
        quantity: 1,
        price: 30.00,
        image: "https://images.unsplash.com/photo-1592878772265-4f4f4f4f4f4f", // Placeholder image
      },
      {
        id: "3",
        name: "Fringed shoulder bag",
        description: "Black : L",
        quantity: 1,
        price: 120.00,
        image: "https://images.unsplash.com/photo-1592878772265-4f4f4f4f4f4f", // Placeholder image
      },
    ],
    subtotal: 599.00,
    discount: 50.00,
    shipmentCost: 22.50,
    grandTotal: 571.50,
  };

  // Dummy Cart Items for demonstration
  const dummyCartItems = [
    {
      id: "macbook-pro",
      name: "Apple MacBook Pro 14\"",
      description: "M2 Chip",
      quantity: 1,
      price: 79.00,
      image: "https://images.unsplash.com/photo-1611095790885-35560967000d", // Placeholder image
    },
    {
      id: "iphone-14-pro",
      name: "Apple iPhone 14 Pro",
      description: "Max 256GB",
      quantity: 1,
      price: 99.00,
      image: "https://images.unsplash.com/photo-1678604739268-3e9a0f4a8f9d", // Placeholder image
    },
    {
      id: "magic-keyboard",
      name: "Apple Magic Keyboard",
      description: "for iPad Pro 11\" Combo",
      quantity: 1,
      price: 58.00,
      image: "https://images.unsplash.com/photo-1627885060875-1e3a1f1a1b1a", // Placeholder image
    },
  ];

  return (
    <div className="relative h-full w-full bg-slate-950 overflow-hidden">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      {/* <SmoothCursor 
        cursor={<SmoothCursor />}
        springConfig={{
          damping: 45,
          stiffness: 400,
          mass: 1,
          restDelta: 0.001
        }}
      /> */}

      {/* Hero Section */}
      <section className="relative py-20 px-4 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <GradualSpacing
            text="Easel Marketplace"
            className="font-bold mb-6 text-center text-white text-5xl md:text-7xl"
          />
          <ShinyText
            text="Discover, &nbsp;buy, &nbsp;and &nbsp;sell &nbsp;unique &nbsp;artworks &nbsp;from &nbsp;a &nbsp;global &nbsp;community of &nbsp;artists."
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          />
          <div className="flex justify-center gap-4">
            <button
              onClick={openFilterModal}
              className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              Open Advanced Filters
            </button>
            <button
              onClick={openOrderModal}
              className="px-6 py-3 rounded-full bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors"
            >
              View Order Details (Demo)
            </button>
            <button
              onClick={openCheckoutModal}
              className="px-6 py-3 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              Open Checkout (Demo)
            </button>
          </div>
        </div>
      </section>

      {/* Velocity Scroll Section */}
      <div className="py-16" style={{ marginTop: "50px" }}>
        <VelocityScroll 
          text="BUY • SELL • DISCOVER • TRADE • INVEST • CONNECT • COLLECT • ACQUIRE • EXCHANGE • TRANSACT"
          default_velocity={2}
          className="text-4xl font-bold text-white/80 tracking-[0.2em]"
        />
      </div>

      {/* Quick Stats Section */}
      <QuickStats />

      {/* Advanced Filter Modal */}
      <AdvancedFilterModal isOpen={isFilterModalOpen} onClose={closeFilterModal} />

      {/* Order Details Modal */}
      <OrderDetailsModal 
        isOpen={isOrderModalOpen} 
        onClose={closeOrderModal} 
        order={dummyOrder} 
      />

      {/* Checkout Modal */}
      <CheckoutModal 
        isOpen={isCheckoutModalOpen} 
        onClose={closeCheckoutModal} 
        cartItems={dummyCartItems} 
      />

      {/* Placeholder for Artwork Listings */}

    </div>
  );
};

export default Marketplace; 