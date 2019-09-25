import React from "react";
import { Input } from "../../components/Input";
import { StyledContainer } from "./Styles";
import axios from 'axios';
import { FormContainer, FieldContainer, DivContainer, Input1 } from "./Styles";

class Signup extends React.Component {

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
    e.preventDefault();
    axios
      .post('https://olad-backend.herokuapp.com/createnewuser', this.state.credentials)
      .then(res => {
        console.log('Add User:', res);
        this.props.history.push('/login');
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

export default Signup;