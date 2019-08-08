import React, { Component } from 'react';

import beerService from '../services/beersService';
import Navbar from '../components/Navbar';
import BeerDetails from '../components/BeerDetails';

class RandomBeer extends Component {

  state = {
    beer: null
  }

  componentDidMount() {
    beerService
      .getRandomBeer()
      .then(res => {
        const beer = res.data;
        this.setState({ beer });
      })
      .catch(err => {
        console.log(err);
      });
  }

  goToPreviousPage = () => {
    this.props.history.goBack();
  };
  
  render() {
    return (
      <section>
        <Navbar />
        {this.state.beer ? (
          <BeerDetails beer={this.state.beer} goBack={this.goToPreviousPage} />
        ) : null}
      </section>
    );
  }
}

export default RandomBeer;
