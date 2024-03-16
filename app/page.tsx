'use client'

import React, { useEffect, useState } from "react"
import { useMotionValue } from "framer-motion"
import { wrap } from "@popmotion/popcorn"
import { data } from "@/utils/data"
import { Cursor, MainSection, LeftSection, RightSection, Backdrop } from "@/components"
import styled from "styled-components"

export default function Home() {
  const [[imageCount, direction], setImageCount] = useState([0, 0])
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const activeImageIndex = wrap(0, data.length, imageCount)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const { currentImage, prevImage, nextImage, author, date } = data[activeImageIndex];

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    x.set(event.clientX);
    y.set(event.clientY);
  }

  const swipeToImage = (swipeDirection: number) =>
    setImageCount((prevState: [number, number]) => [prevState[0] + swipeDirection, swipeDirection]);

  useEffect(() => {
    setIsLoading(true)

    const timeoutId = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timeoutId);
  }, [currentImage]);

  return (
    <Main onMouseMove={handleMouseMove}>
      <Cursor x={x} y={y} isLoading={isLoading} />
      <Backdrop imageCount={imageCount} currentImage={currentImage} direction={direction} />
      <LeftSection prevImage={prevImage} swipeToImage={swipeToImage} />
      <MainSection
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