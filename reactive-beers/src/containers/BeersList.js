import React, { Component } from 'react';
import Navbar from '../components/Navbar';

import beerService from '../services/beersService';
import BeerCard from '../components/BeerCard';

class BeersList extends Component {
  state = {
    beers: []
  };

  componentDidMount() {
    beerService
      .getAllBeers()
      .then(res => {
        const beers = res.data;
        this.setState({ beers });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { beers } = this.state;
    return (
      <>
        <Navbar />
        {beers.length ? (
          <section>
            {beers.map(beer => (
              <BeerCard key={beer._id} beer={beer} />
            ))}
          </section>
        ) : (
          <img
            src={process.env.PUBLIC_URL + '/img/loading.gif'}
            alt="Loading"
          />
        )}
      </>
    );
  }
}

export default BeersList;
