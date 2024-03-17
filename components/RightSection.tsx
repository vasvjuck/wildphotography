import Image from 'next/image';
import React from 'react'
import styled from 'styled-components'

interface RightSectionProps {
  swipeToImage: (swipeDirection: 1 | -1) => void;
  nextImage: string;
  author: string;
  date: string;
}

const RightSection = ({ swipeToImage, nextImage, author, date }: RightSectionProps) => (
  <RightSectionContainer>
    <NextImage height={330} width={248} src={nextImage} onClick={() => swipeToImage(1)} alt='' />
    <AuthorContainer>
      <Author>{author}</Author>
      <Date>{date}</Date>
      <Link href="/">Have a look</Link>
    </AuthorContainer>
  </RightSectionContainer>
)

const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 93px 0;
  height: 100%;
`
const NextImage = styled(Image)`
  border-radius: 10px;
  border: 1px solid #000;
`
const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 110px;
  font-family: 'Helvetica', sans-serif;
  font-size: 10px;
  `
const Author = styled.p``
const Date = styled.p`
  text-align: end;
`
const Link = styled.a`
  font-weight: 700;
  padding: 8px 16px;
  background-color: #fff;
  color: #202020;
  border-radius: 24px;
  text-align: center;
  text-transform: uppercase;
  transition: background-color .4s ease-in-out;

  &:hover {
    background-color: #d8d9cf;
  }
`

export default RightSection