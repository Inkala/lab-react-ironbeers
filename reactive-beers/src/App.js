import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'milligram';

import Home from './containers/Home';
import BeersList from './containers/BeersList';
import RandomBeer from './containers/RandomBeer';
import NewBeer from './containers/NewBeer';
import NotFound from './containers/NotFound';
import SingleBeer from './components/SingleBeer'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/beers" exact component={BeersList} />
        <Route path="/beers/:id" exact component={SingleBeer} />
        <Route path="/random-beer" exact component={RandomBeer} />
        <Route path="/new-beer" exact component={NewBeer} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
