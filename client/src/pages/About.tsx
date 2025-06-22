import { IconWorld, IconBuildingStore, IconUsers, IconBulb, IconCircleCheck } from '@tabler/icons-react';
import { SpotlightButton } from '../components/eldoraui/SpotlightButton';
import { GradualSpacing } from '../components/eldoraui/GradualSpacing';
import { CardContainer, CardBody, CardItem } from '../components/eldoraui/3d-card';
import { AuroraText } from '../components/eldoraui/aurora-text';
import { IconArrowRight } from '@tabler/icons-react';

const About = () => {
  const achievements = [
    { icon: IconCircleCheck, text: "20+ Years of Valuable Experience" },
    { icon: IconCircleCheck, text: "70+ Successful Projects and Initiatives" },
    { icon: IconCircleCheck, text: "85+ Trusted Employees Network" },
    { icon: IconCircleCheck, text: "35+ Positive Customer Reviews" },
    { icon: IconCircleCheck, text: "15 Achieve Recognition and Awards" },
  ];

  return (
    <div className="text-white">
      <div className="relative isolate overflow-hidden">
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center py-24 sm:py-32">
          <GradualSpacing text="About &nbsp;Easel" className="font-bold tracking-tight text-white text-4xl sm:text-6xl text-center mt-[-50px]" />

          <p className="mt-6 text-lg leading-8 text-gray-300">
            Easel is more than just a platform; it's a vibrant community dedicated to
            celebrating and promoting art in all its forms. We connect artists with art lovers,
            fostering a space for discovery, appreciation, and acquisition.
          </p>
        </div>
      </div>

      {/* Our Story & Mission Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 mt-[-100px] relative z-10 bg-slate-950 rounded-lg shadow-lg overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        {/* Background Dot Pattern */}
        <div className="text-left mb-12">
            <span className="inline-block bg-gray-800 text-blue-400 text-sm font-semibold px-4 py-1 rounded-full">
              About Us
            </span>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
                    Our &nbsp;Story &nbsp;& &nbsp;Mission
                  </AuroraText>
                </h2>
                <p className="mt-4 text-gray-300">
                  Built on innovation, integrity, and excellence, we strive to create meaningful impact through our work.
                </p>
              </div>
              <div className="hidden sm:block">
                <SpotlightButton text="Read &nbsp;More">
                </SpotlightButton>
              </div>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side: Image */}
          <div className="relative">
            <CardContainer className="w-full">
              <CardBody>
                <CardItem>
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Our Story"
                    className="rounded-lg w-full"
                    loading="lazy"
                  />
                </CardItem>
              </CardBody>
            </CardContainer>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-dot-pattern opacity-30"></div>
          </div>
          
          {/* Right Side: Achievements */}
          <div className="space-y-4">
            {achievements.map((item, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg flex items-center">
                <item.icon className="h-6 w-6 text-blue-400 mr-4" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 sm:hidden">
             <SpotlightButton text="Read &nbsp;More" className="w-full" />
        </div>
      </div>

      {/* The Adventure of Our Success Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          <AuroraText colors={["#a855f7", "#e879f9", "#fb923c", "#fde047"]}>
            The &nbsp;Adventure &nbsp;of &nbsp;Our &nbsp;Success
          </AuroraText>
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-3xl mx-auto">
          Our journey showcases the power of collaboration and determination. Together, we have faced challenges, celebrated our victories, and woven a story of progress and achievement.
        </p>  
        <div className="mt-10">
          <SpotlightButton text="Read &nbsp;more" className="w-1/5" />
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {/* Success Story Card */}
          <div className="relative rounded-lg overflow-hidden group h-full">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Success Story" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="text-white font-semibold">Success &nbsp;story</span>
              <button className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm">
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="flex flex-col gap-8 h-full">
            <div className="bg-gray-900 rounded-lg p-8 flex-1 flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-purple-400">10K+</h3>
              <p className="mt-2 text-lg font-semibold">Completed &nbsp;Projects</p>
              <p className="mt-2 text-sm text-gray-400">Discuss key moments where creativity or unconventional thinking.</p>
            </div>
            <div className="bg-gray-900 rounded-lg p-8 flex-1 flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-purple-400">15K+</h3>
              <p className="mt-2 text-lg font-semibold">Satisfied &nbsp;Customer</p>
              <p className="mt-2 text-sm text-gray-400">Highlight milestones—awards, completed projects, personal victories.</p>
            </div>
          </div>

          {/* About Us Card */}
          <div className="relative rounded-lg overflow-hidden group h-full">
            <img src="https://images.unsplash.com/photo-1547891654-e66ed711b934?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About us" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="text-white font-semibold">About us</span>
              <button className="bg-white/20 text-white p-2 rounded-full backdrop-blur-sm">
                <IconArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About; 