import React from 'react';
import Categories from './Categories';
import { Switch, Route } from 'react-router-dom';
import Joke from './Joke';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>CHUCK NORRIS JOKE GENERATOR</h1>
        <img 
          src="https://images.fineartamerica.com/images-medium-large/chuck-norris-i-counted-to-infinity-twice-yvan-goudard.jpg"
          width="200px"
          height="200px"
        />
      </div>
      <Switch>
        <Route
          exact path='/'
          component={Categories}
        />
        <Route 
          path='/:category'
          component={Joke}
        />
      </Switch>
    </div>
  );
}

export default App;
