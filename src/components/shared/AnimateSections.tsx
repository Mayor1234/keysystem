import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  fadeIn,
  slideInLeft,
  slideInRight,
  zoomIn,
  popUp,
} from '../../utils/motionVariants';

const animations = {
  fadeIn,
  slideInLeft,
  slideInRight,
  zoomIn,
  popUp,
};

interface RevealProps {
  children: React.ReactNode;
  type?: keyof typeof animations;
  className?: string;
  delay?: number;
}

const AnimateSections: React.FC<RevealProps> = ({
  children,
  type = 'fadeIn',
  className,
  delay = 0,
}) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animations[type]}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
};

export default AnimateSections;
