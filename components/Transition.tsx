import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const TransitionEffect = () => (
  <Transition
    initial={{ x: '100%', width: '100%' }}
    animate={{ x: '0%', width: '0%' }}
    exit={{ x: ['0%', '100%'], width: ['0%', '100%'] }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
  />
);

const Transition = styled(motion.div)`
position: fixed; 
bottom: 0; 
right: 100%; 
z-index: 30; 
width: 100vw; 
height: 100vh; 
background: red
`

export default TransitionEffect;