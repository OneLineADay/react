import React from "react";
import { NavLink } from "react-router-dom";
import { StyledContainer } from "containers/Navigation/Styles";

export const Navigation = () => {
  return (
    <StyledContainer>
      <div className="nav-logo">Logo</div>
      <div className="nav-options">
        <NavLink to="/newentry">New Entry</NavLink>
        <NavLink to="/entries">Past Entries</NavLink>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to={"/signup"}>Sign Up</NavLink>
      </div>
    </StyledContainer>
  );
};
