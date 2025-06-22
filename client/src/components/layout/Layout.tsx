import { Outlet, Link } from 'react-router-dom';
import { useState } from 'react';
import { 
  Navbar, 
  NavBody, 
  NavItems, 
  MobileNav, 
  MobileNavHeader, 
  MobileNavMenu, 
  MobileNavToggle,
  NavbarLogo,
  NavbarButton
} from '../eldoraui/Navbar';

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', link: '/' },
    { name: 'Gallery', link: '/gallery' },
    { name: 'Marketplace', link: '/marketplace' },
    { name: 'About', link: '/about' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <div className="relative z-10">
        <Navbar>
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <NavbarButton as={Link} href="/register" variant="primary">
              Sign Up
            </NavbarButton>
          </NavBody>
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            </MobileNavHeader>
            <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
              <NavItems items={navItems} onItemClick={() => setIsOpen(false)} />
              <NavbarButton as={Link} href="/register" variant="primary" className="w-full mt-4">
                Sign Up
              </NavbarButton>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout; 