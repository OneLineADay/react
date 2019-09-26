import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInRequest } from "../redux/user/user.actions";

const StyledContainer = styled.div`
  max-width: 480px;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div {
      display: flex;
      flex-direction: column-reverse;
      min-width: 100%;
      padding: 1rem 2rem;

      input {
        padding: 0.4rem;
        border-radius: 3px;
        outline: none;
        margin: 1px solid grey;
      }

      button {
        padding: 0.8rem;
      }
    }
  }
`;

const Login = ({ login }) => {
  const handleSubmit = values => {
    const { username, password } = values;
    login(username, password);
  };

  const schema = Yup.object().shape({
    username: Yup.string().required("Please enter username"),
    password: Yup.string().required("Please enter Password")
  });

  const setTitle = () => {
    document.title = "One Line A Day | Login";
  };

  useEffect(setTitle, []);
  return (
    <StyledContainer>
      <h1>Login to your account!</h1>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="span" />
            </div>
            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
          </Form>
        )}
      </Formik>
    </StyledContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(signInRequest(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
