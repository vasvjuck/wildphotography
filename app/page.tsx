'use client'

import React, { useState } from "react"
import { motion, useMotionValue, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { data } from "@/utils/data"
import Cursor from "@/components/Cursor/Cursor"
import ActiveImage from "@/components/ActiveImage"
import styled from "styled-components"
import LeftSection from "@/components/LeftSection"
import RightSection from "@/components/RightSection"

export default function Home() {
  const [[imageCount, direction], setImageCount] = useState([0, 0])
  const activeImageIndex = wrap(0, data.length, imageCount)
  const { currentImage, prevImage, nextImage, author, date } = data[activeImageIndex];
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  const swipeToImage = (swipeDirection: number) => {
    setImageCount((prevState: [number, number]) => [prevState[0] + swipeDirection, swipeDirection]);
  };

  return (
    <Main onMouseMove={handleMouseMove}>
      <Cursor x={x} y={y} />
      <AnimatePresence key={imageCount}>
        <Wrapper
          initial={{ x: direction !== 1 ? '100%' : '-100%', width: '100%' }}
          animate={{ x: '0%', width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Backdrop src={currentImage} />
        </Wrapper>
      </AnimatePresence>
      <LeftSection prevImage={prevImage} swipeToImage={swipeToImage} />
      <ActiveImage
        direction={direction}
        imageCount={imageCount}
        activeImage={data[activeImageIndex]}
        activeImageIndex={activeImageIndex}
        swipeToImage={swipeToImage}
      />
      <RightSection
        nextImage={nextImage}
        swipeToImage={swipeToImage}
        author={author}
        date={date}
      />
    </Main>
  );
}

const Main = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Wrapper = styled(motion.div)`
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