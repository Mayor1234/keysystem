import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { trustedPartnerslogos } from './constants';

const TrustedPartners = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Start scrolling on mount
  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 30,
          ease: 'linear',
        },
      },
    });
  }, [controls]);

  // Handle mouse leave and enter events
  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    });
  };

  return (
    <div
      className="relative overflow-hidden bg-[#05071E] py-[35px] px-[10px]"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div className="flex gap-9 items-center w-max" animate={controls}>
        {trustedPartnerslogos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Trusted logo"
            className="h-20 w-auto filter hover:grayscale-0 transition-all duration-300 ease-in"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedPartners;
