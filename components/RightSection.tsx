import React from 'react'
import styled from 'styled-components'

const RightSection = ({ swipeToImage, nextImage, author, date }) => (
  <RightSectionWrapper>
    <NextImage src={nextImage} onClick={() => swipeToImage(1)} />
    <AuthorContainer>
      <Author>{author}</Author>
      <Date>{date}</Date>
      <Link href="/">Have a look</Link>
    </AuthorContainer>
  </RightSectionWrapper>
)

const RightSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 16px 93px 0;
  height: 100%;
`
const NextImage = styled.img`
  height: 330px;
  width: 248px;
  border-radius: 10px;
  border: 1px solid #000;
`
const AuthorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 110px;
  `
const Author = styled.p`
  font-size: 20px;
  font-weight: 400;
`
const Date = styled.p`
  font-size: 16px;
  font-weight: 400;
  text-align: end;
`
const Link = styled.a`
  font-size: 10px;
  padding: 8px 16px;
  background-color: #fff;
  color: #202020;
  border-radius: 24px;
  text-align: center;
  text-transform: uppercase;
`

export default RightSection