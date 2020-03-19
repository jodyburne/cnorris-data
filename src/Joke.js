import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Joke(props) {
  const [ joke, setJoke ] = useState('');
  const [ calls, setCalls ] = useState(0);
  const category = props.match.params.category;

  useEffect(() => {
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then(res => {
        if (res.data.value !== joke)
        setJoke(res.data.value)
        else setCalls(calls + 1)
      })
  }, [calls]);

  function getNewJoke() {
    setCalls(calls + 1)
  };

  return (
    <div style={{marginTop: '40px'}}>
      <h3>{joke}</h3>
      <div className='btn-wrapper'>
        <button
          className="btns"
          onClick={() => getNewJoke()}>
          New Joke
        </button>
        <Link to='/'>
          <button className="btns">
            Go Back
          </button>  
        </Link>
      </div>
    </div>
  );
}
