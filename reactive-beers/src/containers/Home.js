import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="home-page">
      <article>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + '/img/beers.jpg'}
            alt="All beers"
          />
        </div>
        <Link to="/beers">
          <h3>All Beers</h3>
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse libero
          alias quaerat nesciunt, atque natus nobis voluptates earum ex quos
          expedita molestias repellat aspernatur.
        </p>
      </article>
      <article>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + '/img/random-beer.jpg'}
            alt="Random beer"
          />
        </div>
        <Link to="/random-beer">
          <h3>Random Beer</h3>
        </Link>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
          alias vel nisi illo sequi aliquam dicta qui aperiam ea consequatur eum
          quos, sed libero assumenda.
        </p>
      </article>
      <article>
        <div className="img-container">
          <img
            src={process.env.PUBLIC_URL + '/img/new-beer.jpg'}
            alt="New beer"
          />
        </div>
        <Link to="/new-beer">
          <h3>New Beer</h3>
        </Link>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          earum accusantium voluptates dicta deserunt possimus sit maxime esse
          unde eos ipsum omnis, saepe numquam!
        </p>
      </article>
    </section>
  );
}

export default Home;
