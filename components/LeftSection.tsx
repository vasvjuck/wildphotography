import Image from 'next/image';
import React, { FC } from 'react'
import styled from 'styled-components'

interface LeftSectionProps {
  swipeToImage: (swipeDirection: 1 | -1) => void;
  prevImage: string;
}

const LeftSection: FC<LeftSectionProps> = ({ swipeToImage, prevImage }) => (
  <LeftSectionContainer>
    <Logo href='/'>XYZ Photography</Logo>
    <PrevImage height={330} width={248} src={prevImage} onClick={() => swipeToImage(-1)} alt='' />
  </LeftSectionContainer>
);

const LeftSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 0 16px 16px;
  height: 100%
`
const Logo = styled.a`
  font-size: 16px;
  text-transform: uppercase;
  transition: color .4s ease-in-out;

  &:hover {
    color: #d8d9cf;
  }

`
const PrevImage = styled(Image)`
  height: 330px;
  width: 248px;
  border-radius: 10px;
  border: 1px solid #000;
`

export default LeftSection