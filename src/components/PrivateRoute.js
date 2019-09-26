import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectToken } from "redux/user/user.selectors";

const PrivateRoute = ({ token, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  token: selectToken
});

export default connect(mapStateToProps)(PrivateRoute);
