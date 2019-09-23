import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";

const StyledForm = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
`

const initialState = {
    name: "",
    email: "",
    password: ""
}

const Login = ({ errors, touched, status }) => {
    const [user, setUser] = useState([]);
    const [values, setValues] = React.useState(initialState);

    useEffect(() => {
      if (status) {
        setUser([...user, status]);
      }
    }, [status]);


    const onChange = e => {
        setValues({
          ...values,
          [e.target.name]: e.target.value
        });
      };

    return(
        <div>
            <StyledForm>
                <Field className="LoginTab"
                 type="text" 
                 name="name" 
                 placeholder="Name" 
                 onChange = {onChange}
                 />
                {touched.name && errors.name &&  <p className="error">{errors.name}</p>}

                <Field className="LoginTab"
                type="text" 
                name="email" 
                placeholder="Email" 
                onChange = {onChange}
                />
                {touched.email && errors.email &&  <p className="error">{errors.email}</p>}

                <Field className="LoginTab"
                type="text" 
                name="password" 
                placeholder="Password" 
                onChange = {onChange}
                />
                {touched.password && errors.password &&  <p className="error">{errors.password}</p>}

                <button className="login-btn">Log in</button>
            </StyledForm>
        </div>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({ name, email, password }) {
        return{
            name: name || "",
            email: email || "",
            password: password || "",
        };
    },
    validateYupSchema: Yup.object().shape({
        name: Yup.string().required("Enter a name please"),
        email: Yup.string().required("Enter an email please"),
        password: Yup.string().required("Enter a password please"),
    }),
    handleSubmit(values, { setStatus }) {
        axios 
        .post("https://reqres.in/api/users", values)
        .then(res => {
            setStatus(res.data);
        })
        .catch(err => console.log(err.res))
    }
})(Login);
console.log(FormikLogin);
export default FormikLogin;

