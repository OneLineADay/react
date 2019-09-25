import React, { useState, useEffect } from "react";
import { withFormik, Form, Field, validateYupSchema } from 'formik';
import * as Yup from "yup";
import axios from "axios";
import { FormContainer, FieldContainer, DivContainer, Input } from "./Styles";


class Login extends React.Component {

    state = {
      credentials: {
        username: '',
        password: ''
      }
    };
  
    handleChange = e => {
      this.setState({
        credentials: {
          ...this.state.credentials,
          [e.target.name]: e.target.value
        }
      });
    };
  
    login = e => {
        console.log('username',this.state.credentials.username, 'password',this.state.credentials.password)
        e.preventDefault();
        axios
            .post( "https://olad-backend.herokuapp.com/login",
            `grant_type=password&username=${this.state.credentials.username}&password=${this.state.credentials.password}`, 
             {
                headers: {
                    Authorization: `Basic ${btoa('lambda-client:lambda-secret')}`,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            })
            .then(res => {
                console.log('token', res.data.access_token);
                localStorage.setItem('token', res.data.access_token);
                this.props.history.push('/');
            })
            .catch(err => console.log(err));
    };
  
    render() {
      return (
        <DivContainer>
          <h3 className="welcomeBack">Welcome Back</h3>
          <FormContainer>
          <form onSubmit={this.login}>
          <FieldContainer>
            <Input
              type="text"
              name="username"
              value={this.state.credentials.username}
              placeholder='Username'
              onChange={this.handleChange}
            />
            <Input
              type="password"
              name="password"
              value={this.state.credentials.password}
              placeholder='Password'
              onChange={this.handleChange}
            />
            <button>Log in</button>
            </FieldContainer>
          </form>
          </FormContainer>
        </DivContainer>
      );
    }
  }
  
  export default Login;