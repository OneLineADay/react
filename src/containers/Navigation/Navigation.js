import React from "react";
import { connect } from "react-redux";
import { StyledContainer } from "containers/Navigation/Styles";
import { signOutRequest } from "redux/user/user.actions";

const Navigation = ({ logout }) => {
  return (
    <StyledContainer>
      <div className="nav-logo">
        <img src="https://i.imgur.com/YhAVgpu.png" alt="" />
      </div>
      <div className="nav-options">
        <span onClick={logout}>Log out</span>
      </div>
    </StyledContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(signOutRequest())
});

export default connect(
  null,
  mapDispatchToProps
)(Navigation);
