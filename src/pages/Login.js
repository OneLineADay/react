import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInRequest } from "redux/user/user.actions";
import { StyledContainer, StyledBody } from "utils/styles.utils";

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
    <StyledBody>
    <StyledContainer>
      <div className = 'logoDiv'>
        <img src = 'https://i.imgur.com/YhAVgpu.png' href = ''></img>
      </div>
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
            <h1>Log in to view your entries</h1>
            <div className = 'inputDiv'>
              <h3>USERNAME</h3>
              <Field type="text" name="username" placeholder = "USERNAME"/>
              <ErrorMessage name="username" component="span" />
            </div>
            <div className = 'inputDiv'>
              <h3>PASSWORD</h3>
              <Field type="password" name="password" placeholder = "PASSWORD"/>
              <ErrorMessage name="password" component="span" />
            </div>
            <div>
              <button type="submit">Log In</button>
              
            </div>
            <h4>Don't have an account? <a href = '/signup'>Sign Up</a> here</h4>
          </Form>
        )}
      </Formik>
    </StyledContainer>
    </StyledBody>

  );
};

const mapDispatchToProps = dispatch => ({
  login: (username, password) => dispatch(signInRequest(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
