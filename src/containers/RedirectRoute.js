import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken } from "redux/user/user.selectors";

const RedirectRoute = ({ user, component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} />
      )
    }
  />
);

const mapStateToProps = createStructuredSelector({
  user: selectToken
});

export default connect(mapStateToProps)(RedirectRoute);
