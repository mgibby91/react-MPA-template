import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Index from './components/Index';
import Registration from './components/registration/Registration';
import Page1 from './components/page1/Page1';
import Page2 from './components/page2/Page2';
import Page3 from './components/page3/Page3';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  const [state, setState] = useState({
    loggedInStatus: 'NOT_LOGGED_IN',
    user: {}
  });

  function setSuccessfulUser(userData) {
    console.log('set success user', userData);
    setState({ ...state, loggedInStatus: 'LOGGED_IN', user: userData })
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
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
