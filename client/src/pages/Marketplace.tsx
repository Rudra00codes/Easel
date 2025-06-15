import { useState } from "react";
import { AuroraText } from "../components/eldoraui/aurora-text";
// import { SmoothCursor } from "../components/common/SmoothCursor"; // Comment out or remove this import
import {
  Navbar,
  NavBody,
  NavItems,
  NavbarLogo,
  NavbarButton,
} from "../components/eldoraui/Navbar";
import { VelocityScroll } from "../components/eldoraui/scrollbasedvelocity";
import ShinyText from "../components/eldoraui/ShinyText";
import { QuickStats } from "../components/common/QuickStats";
import { AdvancedFilterModal } from "../components/common/AdvancedFilterModal";
import { OrderDetailsModal } from "../components/common/OrderDetailsModal";
import { CheckoutModal } from "../components/common/CheckoutModal";
import { SpotlightButton } from "../components/eldoraui/SpotlightButton";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const navItems = [
  { name: "Home", link: "/" },
  { name: "Gallery", link: "/Gallery" },
  { name: "Marketplace", link: "/Marketplace" },
  { name: "About", link: "/about" },
  { name: "Contact", link: "/contact" },
];

const Marketplace = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  const navigate = useNavigate();
  const { user } = useAuth();

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
    <div className="min-h-screen bg-black text-white">
      {/* Background Gradient */}
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* <SmoothCursor 
        cursor={<SmoothCursor />}
        springConfig={{
          damping: 45,
          stiffness: 400,
          mass: 1,
          restDelta: 0.001
        }}
      /> */}
      <Navbar>
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <NavbarButton href="/register" variant="primary">
            Sign Up
          </NavbarButton>
        </NavBody>
      </Navbar>

      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
              Easel &nbsp;Marketplace
            </AuroraText>
          </h1>
          <ShinyText
            text="Discover, &nbsp;buy, &nbsp;and &nbsp;sell &nbsp;unique &nbsp;artworks &nbsp;from &nbsp;a &nbsp;global &nbsp;community of &nbsp;artists."
            className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <SpotlightButton text="Open Advanced Filters" onClick={openFilterModal} />
            <SpotlightButton text="View Order Details (Demo)" onClick={openOrderModal} />
            <SpotlightButton text="Open Checkout (Demo)" onClick={openCheckoutModal} />
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
