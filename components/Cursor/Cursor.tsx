import { MotionValue, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

interface CursorProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
  isLoading: boolean;
}

const Cursor = ({ x, y, isLoading }: CursorProps) => (
  <Container>
    <CursorWrapper style={{ x, y }} >
      <Circle $loading={isLoading}>
        <Dot />
      </Circle>
    </CursorWrapper>
  </Container>
)

const Container = styled.div`
 pointer-events: none;
 position: relative;
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: 1;
`
const CursorWrapper = styled(motion.div)`
  position: absolute;
  top: -30px;
  left: -30px;
  width: 42px;
  height: 42px;
  pointer-events: none;
  z-index: 999;
`
const Circle = styled.div<{ $loading?: boolean; }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  height: 42px;
  width: 42px;
  border: 2px solid #b3b3b3;
  border-top: ${props => props.$loading ? "2px #fff solid" : null};
  animation: ${props => props.$loading ? "spin 1.6s infinite linear" : null};

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(359deg);
    }
  }
`
const Dot = styled.div`
  height: 4px;
  width: 4px;
  background-color: #fff;
  border-radius: 50%;
`

export default Cursor;