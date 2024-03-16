import React, { FC } from 'react'
import styled from 'styled-components'

interface LeftSectionProps {
  swipeToImage: (swipeDirection: 1 | -1) => void;
  prevImage: string;
}

const LeftSection: FC<LeftSectionProps> = ({ swipeToImage, prevImage }) => (
  <LeftSectionContainer>
    <Logo>XYZ Photography</Logo>
    <PrevImage src={prevImage} onClick={() => swipeToImage(-1)} />
  </LeftSectionContainer>
);

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0 16px 16px;
  height: 100%
`
const Logo = styled.div`
  font-size: 16px;
  text-transform: uppercase;
`
const PrevImage = styled.img`
  height: 330px;
  width: 248px;
  border-radius: 10px;
  border: 1px solid #000;
`

export default LeftSection