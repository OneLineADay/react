import React from "react";

export const Input = ({ type = "text", ...otherProps }) => (
  <input type={type} {...otherProps} />
);
