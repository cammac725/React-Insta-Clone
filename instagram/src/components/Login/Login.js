import React from 'react';
import { LoginWrapper } from '../Styles';
import { LoginContent } from '../Styles';
import { LoginForm } from '../Styles';

// ==========================
//       Components
// ==========================

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = () => {
    // const user = this.state.username;
    localStorage.setItem('user', this.state.username);
    window.location.reload();
  }

  render() {
    return (
      <LoginWrapper>
        <LoginContent>
          <LoginForm>
            <h1>Insta-Cam</h1>
            <input
              type='text'
              name='username'
              placeholder='User Name'
              value={this.state.username}
              onChange={this.handleChanges}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              value={this.state.password}
              onChange={this.handleChanges}
            />
            <button onClick={this.handleLogin}>Login</button>
          </LoginForm>
        </LoginContent>
      </LoginWrapper>
    )
  }
}

export default Login;