import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';
import Registration from './components/registration/Registration';
import Login from './components/login/Login';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [state, setState] = useState({
    loggedIn: false,
    user: {}
  });

  useEffect(() => {
    axios.get('/api/logged_in')
      .then(res => {
        console.log('loggedinRes', res);
        if (JSON.stringify(res.data.userData) !== '{}') {
          setState({ loggedInStatus: true, user: res.data })
        }
      })
      .catch(err => {
        console.log('logged in err', err);
      })
  }, []);

  function setSuccessfulUser(userData) {
    // console.log('set success user', userData);
    setState({ ...state, loggedInStatus: true, user: userData })
  }

  function handleLogout() {
    axios.get('/api/logout')
      .then(res => {
        console.log('logout res', res);
        setState({ loggedIn: false, user: {} })
      })
      .catch(err => {
        console.log('logout err', err);
      })
  }

  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Switch >
          <Route
            path='/'
            exact
            render={props => (
              <Index
                {...props}
                loggedInStatus={state.loggedInStatus}
                handleLogout={handleLogout}
              />
            )}
          />
          <Route
            path='/registration'
            exact
            render={props => (
              <Registration
                {...props}
                setSuccessfulUser={setSuccessfulUser}
              />
            )}
          />
          <Route
            path='/login'
            exact
            render={props => (
              <Login
                {...props}
                setSuccessfulUser={setSuccessfulUser}
              />
            )}
          />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
