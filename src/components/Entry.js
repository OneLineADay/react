import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  margin: .6rem;
  background: white;
`;

const Entry = ({ text, date }) => (
  <StyledCard>
    <span>{date}</span>
    <p>{text}</p>
  </StyledCard>
);

export default Entry;
