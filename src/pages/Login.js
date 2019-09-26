import React from "react";
import { connect } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { signInRequest } from "../redux/user/user.actions";

const Login = ({ login }) => {
  const handleSubmit = values => {
    const { username, password } = values;
    login(username, password);
  };

  const schema = Yup.object().shape({
    username: Yup.string().required("Please enter username"),
    password: Yup.string().required("Please enter Password")
  });
  return (
    <div>
      <h1>Login to your account!</h1>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="username" />
            <ErrorMessage name="username" component="div" />
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
  login: (username, password) => dispatch(signInRequest(username, password))
});

export default connect(
  null,
  mapDispatchToProps
)(Login);
