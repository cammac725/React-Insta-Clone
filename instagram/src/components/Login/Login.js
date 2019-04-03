import React from 'react';
import styled from 'styled-components';

// ==========================
//     Styled Components
// ==========================

const LoginWrapper = styled.div`
  height: 100vh;
`;

const LoginContent = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 550px;
  height: 500px;
  margin: 0 auto;
  top: 40px;
  padding-top: 20px;
  background-color: #A2A79E;
  border-radius: 20% 20% 40% 40%;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  margin-top: 10px;
  h1 {
  font-family: 'Pacifico', cursive;
  font-size: 3.5rem;
  }
  input {
    margin: 30px 0;
    padding: 8px 20px 12px 20px;
    border-top: none;
    border-left: none;
    border-radius: 10% 10% 40% 40%;
    box-shadow: 6px 8px gray;
    &:focus {
    outline: none;
    }
  }
  button {
    margin-top: 40px;
    padding: 5px 30px;
    background-color: #A27E8E;
    border-top: none;
    border-left: none;
    border-radius: 10% 10% 40% 40%;
    box-shadow: 4px 6px gray;
    &:focus {
    outline: none;
    }
  }
`;


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
    const user = this.state.username;
    localStorage.setItem('user', user);
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