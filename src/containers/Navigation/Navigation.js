import React from "react";
import { NavLink } from "react-router-dom";
import { StyledContainer } from "containers/Navigation/Styles";

export const Navigation = () => {
  return (
    <StyledContainer>
      <div className="nav-logo">
        <img src="https://i.imgur.com/YhAVgpu.png" alt="" />
      </div>
      <div className="nav-options">
        <NavLink to="/new">New Entry</NavLink>
        <NavLink to="/login">Log out</NavLink>
      </div>
    </StyledContainer>
  );
};
