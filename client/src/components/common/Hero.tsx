import { useEffect, useState, useRef, useCallback, memo } from "react";
import { GradualSpacing } from "../eldoraui/GradualSpacing";
import { GitStarButton } from "../eldoraui/GitStarButton";
import { SpotlightButton } from "../eldoraui/SpotlightButton";
import { CardContainer, CardBody, CardItem } from "../eldoraui/3d-card";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedTooltip } from "../eldoraui/AnimatedTooltip";
import ShinyText from "../eldoraui/ShinyText";
import { AuroraText } from "../eldoraui/aurora-text";

const heading = "Experience Art\nLike Never\nBefore.";
const perCharDelay = 0.1;
const perCharDuration = 0.5;
const totalChars = heading.replace(/\n/g, "").length;
const headingAnimationDuration = totalChars * perCharDelay + perCharDuration;

const tooltipItems = [
  {
    id: 1,
    name: "John Doe",
    designation: "Artist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Curator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    id: 3,
    name: "Mike Johnson",
    designation: "Collector",
    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];

const Hero = memo(() => {
  const [showContent, setShowContent] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(
      () => setShowContent(true),
      headingAnimationDuration * 1000
    );
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (contentRef.current && !showContent) {
      setContentHeight(contentRef.current.offsetHeight);
    }
  }, [showContent]);

  const renderHeading = useCallback(() => {
    const parts = heading.split("Art");
    return (
      <>
        {parts[0]}
        <AuroraText 
          colors={["#FF0080", "#7928CA", "#0070F3", "#38bdf8"]}
          className="inline-block"
        >
          Art
        </AuroraText>
        {parts[1]}
      </>
    );
  }, []);

  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full bg-transparent">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:28px_48px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-10 mt-[-100px]">
        {/* Left: Headings */}
        <div className="flex-1 text-left max-w-5xl">
          <GradualSpacing text={heading} className="mb-10 text-white" />
          <AnimatePresence>
            {showContent ? (
              <motion.div
                ref={contentRef}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 32 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <ShinyText text="Discover a curated collection of artworks from emerging and established artists, and acquire your favorite pieces with ease." className="text-lg mb-8"/>
                <div className="flex gap-12 mb-10">
                  <SpotlightButton text="Get it now" />
                  <div className="flex items-center gap-4">
                    <GitStarButton />
                    <div className="flex items-center">
                      <AnimatedTooltip items={tooltipItems} />
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <div style={{ height: contentHeight }} aria-hidden />
            )}
          </AnimatePresence>
        </div>
        {/* Right: 3D Card Effect */}
        <div className="flex-1 flex items-center justify-center min-h-[400px]">
          <CardContainer>
            <CardBody>
              <CardItem>
                <img
                  src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308"
                  alt="Art"
                  className="rounded-2xl w-full h-full object-cover"
                  loading="eager"
                  width={500}
                  height={400}
                />
              </CardItem>
              <CardItem
                className="absolute left-8 top-8 text-2xl font-bold text-white"
                translateZ={60}
              >
                3D Art Card
              </CardItem>
              <CardItem
                className="absolute right-8 bottom-8 text-lg text-white"
                translateZ={40}
              >
                Hover me!
              </CardItem>
            </CardBody>
          </CardContainer>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
