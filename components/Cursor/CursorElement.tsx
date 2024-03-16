import { FC } from "react";
import styled from "styled-components";

interface CursorElementProps {
  isLoading: boolean;
}

export const CursorElement: FC<CursorElementProps> = ({ isLoading }) => (
  <Circle $loading={isLoading}>
    <Dot />
  </Circle>
);

const Circle = styled.div<{ $loading?: boolean; }>`
display: flex;
align-items: center;
justify-content: center;
border-radius: 50%;
height: 48px;
width: 48px;
border: 2px solid #b3b3b3;
border-top: ${props => props.$loading ? "2px #fff solid" : null};
animation: ${props => props.$loading ? "spin 0.6s infinite linear" : null};

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