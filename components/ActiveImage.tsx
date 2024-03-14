import React from 'react'
import { sliderVariants, transition } from "@/utils/framerMotion"
import { motion, AnimatePresence } from "framer-motion"
import styled from 'styled-components'

interface ActiveImageProps {
  direction: number;
  imageCount: number;
  currentImage: string;
  swipeToImage: (swipeDirection: 1 | -1) => void;
}

interface DragInfo {
  offset: {
    x: number;
    y: number;
  };
}

const ActiveImage = ({ direction, imageCount, currentImage, swipeToImage }: ActiveImageProps) => {
  const dragEndHandler = (dragInfo: DragInfo) => {
    const swipeThreshold = 50
    if (dragInfo.offset.x > swipeThreshold) return swipeToImage(-1);

    if (dragInfo.offset.x < -swipeThreshold) return swipeToImage(1);
  }

  return (
    <MainImageWrapper>
      <AnimatePresence>
        <MainImage
          key={imageCount}
          style={{
            backgroundImage: `url(${currentImage})`
          }}
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        />
      </AnimatePresence>
    </MainImageWrapper>
  )
}

const MainImageWrapper = styled.div`
  position: relative;
  height: 680px;
  width: 512px;
  overflow: hidden;
`
const MainImage = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform, opacity;
  border-radius: 10px;
  border: 1px solid #000;
`
export default ActiveImage