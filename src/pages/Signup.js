import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signUpRequest } from "../redux/user/user.actions";

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
    <div>
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
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
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
