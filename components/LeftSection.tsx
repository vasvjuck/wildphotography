import React from 'react'
import styled from 'styled-components'

interface LeftSectionProps {
  swipeToImage: (swipeDirection: 1 | -1) => void;
  prevImage: string;
}

const LeftSection = ({ swipeToImage, prevImage }: LeftSectionProps) => (
  <LeftSectionWrapper>
    <PrevImage src={prevImage} onClick={() => swipeToImage(-1)} />
  </LeftSectionWrapper>
);

const LeftSectionWrapper = styled.div`
  display: flex;
  align-self: flex-end;
  padding: 0 0 16px 16px;
`
const PrevImage = styled.img`
  height: 330px;
  width: 248px;
  border-radius: 10px;
  border: 1px solid #000;
`

export default LeftSection