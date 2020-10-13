import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {

  return (
    <nav className='nav-main-container'>
      <h3>Website Logo</h3>
      <ul className="nav-links">
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/registration'>
          <li>Registration</li>
        </Link>
        <Link to='/login'>
          <li>Login</li>
        </Link>
        <Link to='/page1'>
          <li>Page1</li>
        </Link>
        <Link to='/page2'>
          <li>Page2</li>
        </Link>
        <Link to='/page3'>
          <li>Page3</li>
        </Link>
      </ul>
    </nav>
  )

}