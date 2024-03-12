'use client'

import React, { useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { data } from "@/utils/data"

import styled from "styled-components"
import { Indicators } from "@/components/Indicators"
import { sliderVariants, transition } from "@/utils/framerMotion"


export default function Home() {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, data.length, imageCount)
  const {currentImage, headline, prevImage, nextImage} = data[activeImageIndex];

  const swipeToImage = (swipeDirection: number) => {
    setImageCount((prevState: [number, number]) => [prevState[0] + swipeDirection, swipeDirection]);
  };
  
  const dragEndHandler = (dragInfo: PanInfo) => {
    const swipeThreshold = 50
    if (dragInfo.offset.x > swipeThreshold) return swipeToImage(-1);

    if (dragInfo.offset.x < -swipeThreshold) return swipeToImage(1);
  }
  
  return (
    <Main>
      <Wrapper>
        <Backdrop src={currentImage}  />
      </Wrapper>
      <MainImageWrapper>
        <AnimatePresence initial={false} custom={direction}>
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
            dragElastic={1}
            onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
          />
        </AnimatePresence>
      </MainImageWrapper>
      <ContentWrapper>
          <Heading>{headline}</Heading>
          <Indicators data={data} activeImage={activeImageIndex}/>
      </ContentWrapper>
      {/* TODO: alt */}
     <PrevImage src={prevImage} onClick={() => swipeToImage(-1)} />
     <NextImage src={nextImage} className="image nextImage" onClick={() => swipeToImage(1)} />
  </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
`
const Backdrop = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(16px);
`
const MainImageWrapper = styled.div`
  position: relative;
  height: 680px;
  width: 512px;
  overflow: hidden;
`
// TODO: check styles
const MainImage =  styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;
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
const Heading =  styled.h1`
  font-size: 180px;
  font-weight: 400;
  text-transform: uppercase;
  text-align: center;
  user-select: none;
`
const Image = styled.img`
  height: 330px;
  width: 248px;
  border-radius: 10px;
  border: 1px solid #000;
`
const PrevImage = styled(Image)`
  position: absolute;
  left: 16px;
  bottom: 16px;
`
const NextImage = styled(Image)`
  position: absolute;
  right: 16px;
  top: 16px;
`