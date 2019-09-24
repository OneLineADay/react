import React from "react";
import { Input } from "../../components/Input";
import { StyledContainer } from "./Styles";

const initialState = {
  name: "",
  email: "",
  password: ""
};

export const Signup = props => {
  const [values, setValues] = React.useState(initialState);

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  return (
    <StyledContainer>
      <Input
        name="name"
        placeholder="Your name"
        value={values.name}
        onChange={onChange}
      />
      <Input
        name="email"
        type="email"
        value={values.email}
        onChange={onChange}
        placeholder="Your email"
      />
      <Input
        name="password"
        type="password"
        value={values.password}
        onChange={onChange}
        placeholder="Your password"
      />

      <button>Sign up</button>
    </StyledContainer>
  );
};
