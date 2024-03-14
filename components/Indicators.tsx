import React from "react";

import styled from "styled-components"

// todo: typescript
const IndicatorsComponent = ({ data, activeImage }: any) => (
  <IndicatorsWrapper>
    <IndicatorsContent>{data[activeImage].id + 1} of {data.length}</IndicatorsContent>
    <Indicators>
      {data.map(({ id }: any) => (
        <Indicator key={id} $active={id === activeImage} />
      ))}
    </Indicators>
  </IndicatorsWrapper>
)

const IndicatorsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  align-items: center;
`
const IndicatorsContent = styled.p`
  font-size: 16px;
`
const Indicators = styled.div`
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

export { IndicatorsComponent as Indicators };

