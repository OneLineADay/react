import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signUpRequest } from "../redux/user/user.actions";
import { StyledContainer } from "../utils/styles.utils";

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
    <StyledContainer>
      <h1>Register account!</h1>
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
            <div>
              <Field type="text" name="username" />
              <ErrorMessage name="username" component="span" />
            </div>
            <div>
              <Field type="email" name="email" />
              <ErrorMessage name="email" component="span" />
            </div>
            <div>
              <Field type="password" name="password" />
              <ErrorMessage name="password" component="span" />
            </div>
            <div>
              <button type="submit">Signup</button>
            </div>
          </Form>
        )}
      </Formik>
    </StyledContainer>
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
