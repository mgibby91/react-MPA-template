import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Index(props) {

  // console.log('indexProps', props);

  useEffect(() => {

    const promiseIndex = axios.get('/api/');

    Promise.all([promiseIndex])
      .then(all => {
        let [indexData] = all;
        indexData = indexData.data;
        console.log('indexdataafter', indexData);
      })
      .catch(err => {
        console.log('indexError', err);
      })

  }, []);

  return (
    <div className='home-main-container'>
      Home!
      {props.loggedInStatus && (
        <button className='logout-btn' onClick={() => props.handleLogout()}>Logout</button>
      )}
    </div>
  )

}