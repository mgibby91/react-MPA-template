import React, { useState } from 'react';
import axios from 'axios';

export default function Login(props) {

  const [state, setState] = useState({
    email: '',
    password: '',
    loginErrors: ''
  });

  function handleSubmit(event) {
    console.log('formState', state);

    axios.post('/api/login', {
      email: state.email,
      password: state.password,
    }, {
      withCredentials: true
    })
      .then(res => {
        console.log('login response', res);
        // set user in App
        if (JSON.stringify(res.data) === '{}') {
          alert('incorrect login info!')
          return;
        }
        props.setSuccessfulUser(res.data[0]);
        // redirect to Index
        props.history.push('/');
      })
      .catch(err => {
        console.log('reg error', err);
      })

    event.preventDefault();
  }

  return (
    <div className='registration-main-container'>
      <form onSubmit={(event) => handleSubmit(event)}>
        <input
          type="email"
          name='email'
          placeholder="Email"
          value={state.email}
          onChange={(event) => setState({ ...state, email: event.target.value })}
          required
        />
        <input
          type="password"
          name='password'
          placeholder="Password"
          value={state.password}
          onChange={(event) => setState({ ...state, password: event.target.value })}
          required
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  )

}