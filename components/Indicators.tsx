import React from "react";

import styled from "styled-components"

interface DataItem {
  id: number;
  currentImage: string;
  headline: string;
  date: string;
  author: string;
  prevImage: string;
  nextImage: string;
}

const Indicators = ({ data, activeImage }: { data: DataItem[], activeImage: number }) => (
  <IndicatorsWrapper>
    <IndicatorsContent>{data[activeImage].id + 1} of {data.length}</IndicatorsContent>
    <IndicatorsElements>
      {data.map(({ id }: any) => (
        <Indicator key={id} $active={id === activeImage} />
      ))}
    </IndicatorsElements>
  </IndicatorsWrapper>
)

const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
`
const IndicatorsContent = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-size: 10px
`
const IndicatorsElements = styled.div`
  display: flex;
  gap: 8px;
`
const Indicator = styled.span<{ $active?: boolean; }>`
  width: 5px;
  height: 8px;
  border: 1px solid #fff;
  border-radius: 2px;
  background: ${props => props.$active ? "#fff" : null};
`;

export default Indicators;

