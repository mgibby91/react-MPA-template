import React, { useState } from 'react';
import axios from 'axios';

export default function Registration(props) {

  const [state, setState] = useState({
    email: '',
    password: '',
    passwordConfirmation: '',
    registrationErrors: ''
  });

  function handleSubmit(event) {
    console.log('formState', state);

    axios.post('/api/register', {
      email: state.email,
      password: state.password,
    }, {
      withCredentials: true
    })
      .then(res => {
        console.log('reg response', res);
        // set user in App
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
        <input
          type="password"
          name='passwordConfirmation'
          placeholder="Password confirmation"
          value={state.passwordConfirmation}
          onChange={(event) => setState({ ...state, passwordConfirmation: event.target.value })}
          required
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )

}