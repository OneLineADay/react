import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signUpRequest } from "redux/user/user.actions";
import { StyledContainer, StyledBody } from "utils/styles.utils";
import Logo from "../img/olad_logo.png"

const Signup = ({ signup }) => {
  const handleSubmit = values => {
    const { username, email, password } = values;
    signup(username, email, password);
  };

  const schema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter email"),
    username: Yup.string().required("Please enter username"),
    password: Yup.string().required("Please enter Password")
  });

  const setTitle = () => {
    document.title = "One Line A Day | Sign up";
  };

  useEffect(setTitle, []);

  return (
    <StyledBody>
      <StyledContainer>
      <div className = 'logoDiv'>
        <img src = {Logo} href = ''></img>
      </div>
        <Formik
          initialValues={{
            username: "",
            email: "",
            password: ""
          }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {() => (
            <Form>
            <h1>Sign up and start making entries</h1>
            <div className = 'inputDiv'>
              <h3>USERNAME</h3>
              <Field type="text" name="username" placeholder = "USERNAME"/>
              <ErrorMessage name="username" component="span" />
            </div>

            <div className = 'inputDiv'>
              <h3>EMAIL</h3>
              <Field type="email" name="email" placeholder = "EMAIL"/>
              <ErrorMessage name="email" component="span" />
            </div>

            <div className = 'inputDiv'>
              <h3>PASSWORD</h3>
              <Field type="password" name="password" placeholder = "PASSWORD"/>
              <ErrorMessage name="password" component="span" />
            </div>
            <div>
              <button type="submit">Log In</button>
              
            </div>
            <h4>Already have an account? <a href = '/login'>Sign In</a> here</h4>
          </Form>
          )}
        </Formik>
      </StyledContainer>
    </StyledBody>

  );
};

const mapDispatchToProps = dispatch => ({
  signup: (username, email, password) =>
    dispatch(signUpRequest(username, email, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Signup);
