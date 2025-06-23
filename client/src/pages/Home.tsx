import Hero from "../components/common/Hero";
import { BentoGrid, BentoGridItem } from "../components/eldoraui/BentoGrid";
import { VelocityScroll } from "../components/eldoraui/scrollbasedvelocity";
import * as TablerIcons from "@tabler/icons-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CircularGallery from "../components/eldoraui/CircularGallery";
import { SmoothCursor } from "../components/common/SmoothCursor";
import { AuroraText } from "../components/eldoraui/aurora-text";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SmoothCursor 
        springConfig={{
          damping: 45,
          stiffness: 400,
          mass: 1,
          restDelta: 0.001
        }}
      />
      <Hero />

      {/* Velocity Scroll Section - Top */}
      <div className="py-16" style={{ marginTop: "-100px" }}>
        <VelocityScroll
          text="EXPLORE • CREATE • SHARE • COLLECT • INSPIRE • CONNECT • DISCOVER • EXPRESS • INNOVATE • TRANSFORM"
          default_velocity={2}
          className="text-4xl font-bold text-white/80 tracking-[0.2em]"
        />
      </div>

      {/* Bento Grid Section */}
      <div className="py-20 px-4" style={{ marginTop: "-80px" }}>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
              Discover &nbsp;Art &nbsp;in &nbsp;New &nbsp;Ways
            </AuroraText>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Explore &nbsp;our &nbsp;curated &nbsp;collection &nbsp;of &nbsp;digital &nbsp;art, &nbsp;connect &nbsp;with &nbsp;artists,
            &nbsp;and &nbsp;experience &nbsp;art &nbsp;like &nbsp;never &nbsp;before.
          </p>
        </div>

        <BentoGrid>
          <AnimatedBentoGridItem
            title="Digital &nbsp;Art &nbsp;Gallery"
            description="Browse through our extensive collection of digital artworks from emerging and established artists."
            header={
              <div className="h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl" />
            }
            icon={
              <TablerIcons.IconPalette size={24} className="text-purple-500" />
            }
            className="md:col-span-2"
          />
          <AnimatedBentoGridItem
            title="Artist Community"
            description="Connect with fellow artists, share your work, and get feedback from the community."
            header={
              <div className="h-32 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl" />
            }
            icon={<TablerIcons.IconUsers size={24} className="text-blue-500" />}
          />
          <AnimatedBentoGridItem
            title="Art Creation"
            description="Create your own digital art using our intuitive tools and share it with the world."
            header={
              <div className="h-32 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl" />
            }
            icon={
              <TablerIcons.IconBrush size={24} className="text-emerald-500" />
            }
          />
          <AnimatedBentoGridItem
            title="Photography"
            description="Explore stunning photography from talented photographers around the globe."
            header={
              <div className="h-32 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl" />
            }
            icon={
              <TablerIcons.IconCamera size={24} className="text-orange-500" />
            }
          />
          <AnimatedBentoGridItem
            title="Collect Art"
            description="Start your digital art collection with our curated pieces from renowned artists."
            header={
              <div className="h-32 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl" />
            }
            icon={<TablerIcons.IconHeart size={24} className="text-pink-500" />}
            className="md:col-span-2"
          />
          <AnimatedBentoGridItem
            title="Art Awards"
            description="Discover award-winning artworks and participate in our monthly art competitions."
            header={
              <div className="h-32 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl" />
            }
            icon={
              <TablerIcons.IconAward size={24} className="text-yellow-500" />
            }
          />
        </BentoGrid>
      </div>

      {/* Velocity Scroll Section - Bottom */}
      <div className="py-15"  style={{ marginBottom: "100px" }}>
        <VelocityScroll
          text="EXPLORE • CREATE • SHARE • COLLECT • INSPIRE • CONNECT • DISCOVER • EXPRESS • INNOVATE • TRANSFORM"
          default_velocity={2}
          className="text-4xl font-bold text-white/80 tracking-[0.2em]"
        />
      </div>
      {/* Featured Artworks Section */}
      <div className="pt-5 pb-20 px-4 bg-black">
        <div className="text-center mb-15" style={{ marginTop: '-70px' }}>
          <h2 className="text-4xl font-bold mb-4">
            <AuroraText colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}>
              Featured &nbsp;Artworks
            </AuroraText>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover &nbsp;our &nbsp;handpicked &nbsp;selection &nbsp;of &nbsp;exceptional &nbsp;artworks
          </p>
        </div>
        <div style={{ height: "600px", position: "relative" }}>
          <CircularGallery
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            items={[
              {
                image:
                  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
                text: "Abstract Dreams",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
                text: "Urban Stories",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1579783901586-d88db74b4fe4",
                text: "Nature's Canvas",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5",
                text: "Colorful Moments",
              },
              {
                image:
                  "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9",
                text: "Modern Art",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

const AnimatedBentoGridItem = ({
  title,
  description,
  header,
  icon,
  className,
}: BentoGridItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <BentoGridItem
        title={title}
        description={description}
        header={header}
        icon={icon}
        className={className}
      />
    </motion.div>
  );
};
