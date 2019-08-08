import axios from 'axios';

class BeerService {
  constructor() {
    this.beer = axios.create({
      baseURL: 'https://ih-beer-api.herokuapp.com/beers'
    });
  }

  getAllBeers() {
    return this.beer.get('/').then(res => res);
  }

  getOneBeer(id) {
    return this.beer.get(`/${id}`).then(res => res);
  }

  getRandomBeer() {
    return this.beer.get('/random').then(res => res);
  }
}

const beerService = new BeerService();

export default beerService;
