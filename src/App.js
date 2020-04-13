import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CacheRoute, { CacheSwitch } from 'react-router-cache-route';

import Home from './views/Home/Home';
import SinglePokemon from './views/SinglePokemon/SinglePokemon';

function App() {
  return (
    <div className="App">
      <Router>
        <CacheSwitch>
          <Route path="/pokemon/:id" exact component={SinglePokemon} />
          <CacheRoute path="/" exact component={Home} />
        </CacheSwitch>
      </Router>
    </div>
  );
}

export default App;
