import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { StyledContainer } from "./Styles";


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

    const logIn = e => {
        e.preventDefault();
        axios
            .post('https://diy-tracker.herokuapp.com/login', `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`, {

                headers: {
                    Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'

                }
            })
            .then(res => {
                console.log('token response:', res);
                localStorage.setItem('token', res.data.access_token);
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    };


    return (
        <StyledContainer>
            <div>
                <Form onSubmit={logIn}>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={onChange}
                    />
                    {touched.name && errors.name && <p className="error">{errors.name}</p>}

                    <Field
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={onChange}
                    />
                    {touched.email && errors.email && <p className="error">{errors.email}</p>}

                    <Field
                        type="text"
                        name="password"
                        placeholder="Password"
                        onChange={onChange}
                    />
                    {touched.password && errors.password && <p className="error">{errors.password}</p>}

                    <button>Log in</button>
                </Form>

                {/* {user.map(users =>(
               <ul key={users.id}>
                   <li>Name:{users.name}</li>
                   <li>Email:{users.email}</li>
                   <li>Password:{users.password}</li>
               </ul>
           ))}         */}
            </div>
        </StyledContainer>
    );
};

const FormikLogin = withFormik({
    mapPropsToValues({ name, email, password }) {
        return {
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

