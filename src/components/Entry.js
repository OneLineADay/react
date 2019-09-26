import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #EDFBFF;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 4px solid #55ccf2;
  border-right: 4px solid #55ccf2;
  border-left: none;
  border-top: none;
  margin-top: 15px;
  height: 7vh;
  width: 65%;

  span{
    font-size: 1.5rem;
  }

  p{
    font-size: 1.2rem;
  }
`;

const Entry = ({ text, entrydate }) => (
  <StyledCard>
    <span>{entrydate}</span>
    <p>{text}</p>
  </StyledCard>
);

export default Entry;
