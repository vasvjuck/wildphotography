import { MotionValue, motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import { CursorElement } from './CursorElement'
interface CursorProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const Cursor = ({ x, y }: CursorProps) => (
  <ContainerCursor>
    <WrapperCursor
      style={{
        x,
        y,
        position: "absolute",
        pointerEvents: "none",
        zIndex: 999,
      }}
    >
      <CursorElement />
    </WrapperCursor>
  </ContainerCursor>
)

const ContainerCursor = styled.div`
pointer-events: none;
position: relative;
position: fixed;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 1;
`
const WrapperCursor = styled(motion.div)`
position: absolute;
top: -40px;
left: -60px;
width: 60px;
height: 60px;
will-change: transform;
contain: layout style size;
`

export default Cursor;