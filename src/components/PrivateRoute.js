import React from "react";
import { Route, Redirect } from "react-router-dom";
import { selectToken as token } from "../redux/user/user.selectors";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => {
        return token ? <Component /> : <Redirect to="/login" />;
      }}
    />
  );
};

export default PrivateRoute;
