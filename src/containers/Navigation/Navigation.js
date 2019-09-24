import React from "react";
import { StyledContainer } from "./Styles";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <StyledContainer>
      <div className="nav-logo">Logo</div>
      <div className="nav-options">
        <Link className="nav-item">New Entry</Link>
        <Link className="nav-item">Past Entries </Link>
        <Link className="nav-item">Log In</Link>
      </div>
    </StyledContainer>
  );
};
