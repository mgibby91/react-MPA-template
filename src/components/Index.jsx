import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

export default function Index(props) {

  console.log('indexProps', props);

  useEffect(() => {

    const promiseIndex = axios.get('/api/');

    Promise.all([promiseIndex])
      .then(all => {
        console.log('all', all);

        let [indexData] = all;
        console.log('indexDatabefore', indexData);

        indexData = indexData.data;
        console.log('indexdataafter', indexData);
      })
      .catch(err => {
        console.log('indexError', err);
      })

  }, [])

  return (
    <div>Home! {props.loggedInStatus}</div>
  )

}