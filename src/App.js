import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/Home/Home';
import SinglePokemon from './views/SinglePokemon/SinglePokemon';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/pokemon/:id" exact component={SinglePokemon} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
