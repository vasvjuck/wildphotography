import React, { useEffect, useRef } from 'react'
import { sliderVariants, transition } from "@/utils/framerMotion"
import { motion, AnimatePresence } from "framer-motion"
import styled from 'styled-components'
import { Indicators } from '@/components';
import { data } from "@/utils/data"
import { nanoid } from 'nanoid'
import { findOverflowLetters } from '@/utils/findOverflowLetters';

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

const MainSection = ({ direction, imageCount, activeImage, activeImageIndex, swipeToImage }: MainSectionProps) => {
  const { headline, currentImage } = activeImage;
  const headingRef = useRef(null)
  const wrapperRef = useRef(null)
  const transformedHealine = headline.split('')

  const dragEndHandler = (dragInfo: DragInfo) => {
    const swipeThreshold = 50
    if (dragInfo.offset.x > swipeThreshold) return swipeToImage(-1);
    if (dragInfo.offset.x < -swipeThreshold) return swipeToImage(1);
  }

  useEffect(() => {
    findOverflowLetters(wrapperRef.current!, headingRef.current!)
  }, [activeImage]);

  return (
    <AnimatePresence>
      <MainImageWrapper>
        <MainImage
          key={imageCount}
          ref={wrapperRef}
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
          <ContentWrapper>
            <Heading ref={headingRef}> {transformedHealine.map(letter => <span key={nanoid()}>{letter}</span>)}
            </Heading>
            <Indicators data={data} activeImage={activeImageIndex} />
          </ContentWrapper>
        </MainImage>
      </MainImageWrapper>
    </AnimatePresence>
  )
}

const MainImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`
const MainImage = styled(motion.div)`
  height: 680px;
  width: 512px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  will-change: transform, opacity;
  border-radius: 10px;
  border: 1px solid #000;
  &:hover {
    cursor: grab;
  }

  &:active {
    cursor: grabbing;
  }
`
const ContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Heading = styled.h1`
  font-size: 220px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  width: 845px;
`
export default MainSection;