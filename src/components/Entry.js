import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #edfbff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 4px solid #55ccf2;
  border-right: 4px solid #55ccf2;
  border-left: none;
  border-top: none;
  min-height: 70px;
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;

  span {
    font-size: 1.5rem;
    display: block;
    margin-bottom: 1rem;
    color: #55ccf2;
  }

  p {
    font-size: 1.2rem;
    color: #444;
  }
`;

const Entry = ({ text, entrydate }) => (
  <StyledCard>
    <div className="date">
      <span>{entrydate}</span>
    </div>
    <div className="text">
      <p>{text}</p>
    </div>
  </StyledCard>
);

export default Entry;
