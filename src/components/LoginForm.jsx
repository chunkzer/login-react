import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div style={styles.container}>
      <div style={styles.inputContainer}>
        <input
          style={styles.inputStyle}
          placeholder="Username"
          type="text"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.inputStyle}
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <div style={styles.buttonsContainer}>
        <div
          onPress={() => loginFn({ username, password })}
          style={styles.loginButton}
        >
          Log-in
        </div>
        <div
          onPress={() => signUpFn({ username, password })}
          style={styles.signUpButton}
        >
          Sign-Up
        </div>
      </div>
    </div>
  );
}

const signUpFn = (params) => {
  axios.post(`localhost:8000/signup`, params)
    .then(result => console.log('result signup: ', result));
}

const loginFn = (params) => {
  axios.post(`localhost:8000/login`, params)
    .then(result => console.log('result login: ', result));
}

const styles = {
  container: {
  },
  inputContainer: {

  },
  buttonsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  loginButton: {
    backgroundColor: 'steelblue',
    height: 20,
    width: 75,
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: 'steelblue',
    borderStyle: 'solid',
    borderRadius: 5,
  },
  signUpButton: {
    backgroundColor: 'steelblue',
    height: 20,
    width: 75,
    fontSize: 16,
    color: 'white',
    borderWidth: 1,
    borderColor: 'steelblue',
    borderStyle: 'solid',
    borderRadius: 5

  },
  inputStyle: {
    width: 200
  }
}

export { LoginForm };
