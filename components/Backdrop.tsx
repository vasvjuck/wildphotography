import React, { FC } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import styled from 'styled-components'

interface BackdropProps {
  imageCount: number;
  currentImage: string;
  direction: number;
}

const Backdrop: FC<BackdropProps> = ({ imageCount, currentImage, direction }) => (
  <AnimatePresence key={imageCount}>
    <WrapperElement
      initial={{ x: direction !== 1 ? '100%' : '-100%', width: '100%' }}
      animate={{ x: '0%', width: '100%' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
    >
      <BackdropImage src={currentImage} />
    </WrapperElement>
  </AnimatePresence>
)

const WrapperElement = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`
const BackdropImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(16px);
`

export default Backdrop;