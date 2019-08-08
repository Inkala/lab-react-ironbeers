import React, { Component } from 'react';

import beerService from '../services/beersService';
import Navbar from './Navbar';
import BeerDetails from './BeerDetails';

class SingleBeer extends Component {
  state = {
    beer: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    beerService
      .getOneBeer(id)
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

export default SingleBeer;
