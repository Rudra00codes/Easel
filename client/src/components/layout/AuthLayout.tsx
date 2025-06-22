import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-black">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      <div className="relative z-10">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AuthLayout; 