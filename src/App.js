import React from 'react';
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

  const someData = 'this is some data';

  return (
    <Router>
      <div className='app-container'>
        <Nav />
        <Switch >
          <Route
            path='/'
            exact
            render={props => (
              <Index {...props} someData={someData} />
            )} />
          <Route path='/registration' component={Registration} />
          <Route path='/page1' component={Page1} />
          <Route path='/page2' component={Page2} />
          <Route path='/page3' component={Page3} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
