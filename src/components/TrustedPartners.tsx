import { motion, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';

const logos: string[] = [
  '/images/partner-logos/lapo.png',
  '/images/partner-logos/npf.png',
  '/images/partner-logos/sterling.png',
  '/images/partner-logos/crusader.png',
  '/images/partner-logos/nafc.png',
  '/images/partner-logos/nbf.png',
  '/images/partner-logos/mpb.png',
  '/images/partner-logos/stanbic.png',
  '/images/partner-logos/muscat.png',
  '/images/partner-logos/bananga.png',
  '/images/partner-logos/santander.png',
];

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
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={logo}
            alt={`Trusted logo ${idx}`}
            className="h-20 w-auto filter hover:grayscale-0 transition-all duration-300 ease-in"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default TrustedPartners;
