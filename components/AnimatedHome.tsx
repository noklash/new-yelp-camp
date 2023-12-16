"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

const AnimatedHome = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 1.5, duration: 1.5 } },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { x: -200 },
    visible: { x: 0, transition: { type: 'spring', stiffness: 120 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ textAlign: 'center', marginTop: '100px' }}
    >
      <motion.h1 variants={itemVariants} style={{ fontSize: '3rem' }}>
        Welcome to <span className='font-bold'>Discovery</span>
      </motion.h1>
      <motion.p variants={itemVariants} style={{ fontSize: '1.5rem' }}>
        Discover and share beautiful places and ideas
      </motion.p>
      <motion.div variants={itemVariants}>
        
            
      </motion.div>
    </motion.div>
  );
};

export default AnimatedHome