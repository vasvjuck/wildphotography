import React, { FC } from 'react'
import { sliderVariants, transition } from "@/utils/framerMotion"
import { motion, AnimatePresence } from "framer-motion"
import styled from 'styled-components'
import { Indicators } from '@/components';
import { data } from "@/utils/data"
interface MainSectionProps {
  direction: number;
  imageCount: number;
  activeImage: {
    headline: string,
    currentImage: string
  };
  activeImageIndex: number;
  swipeToImage: (swipeDirection: 1 | -1) => void;
}

interface DragInfo {
  offset: {
    x: number;
    y: number;
  };
}

const MainSection: FC<MainSectionProps> = ({ direction, imageCount, activeImage, activeImageIndex, swipeToImage }) => {
  const { headline, currentImage } = activeImage;

  const dragEndHandler = (dragInfo: DragInfo) => {
    const swipeThreshold = 50
    if (dragInfo.offset.x > swipeThreshold) return swipeToImage(-1);
    if (dragInfo.offset.x < -swipeThreshold) return swipeToImage(1);
  }

  return (
    <AnimatePresence>
      <BackHeading>{headline}</BackHeading>
      <MainImageWrapper>
        <MainImage
          key={imageCount}
          style={{ backgroundImage: `url(${currentImage})` }}
          custom={direction}
          variants={sliderVariants}
          initial="incoming"
          animate="active"
          exit="exit"
          transition={transition}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
        >
          <Heading>{headline}</Heading>
          <Indicators data={data} activeImage={activeImageIndex} />
        </MainImage>
      </MainImageWrapper>
    </AnimatePresence>
  )
}

const MainImageWrapper = styled.div`
  position: relative;
  height: 680px;
  width: 512px;
  overflow: hidden;
`
const MainImage = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding-bottom: 100px;
  height: 100%;
  border-radius: 10px;
  border: 1px solid #000;
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`
const Heading = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 220px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
  width: 845px;
`
const BackHeading = styled(Heading)`
  -webkit-text-fill-color: transparent; 
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
  z-index: -1
`
export default MainSection;