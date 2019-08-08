import React from 'react';
import { Link } from 'react-router-dom';

function BeerCard(props) {
  const { beer } = props;
  return (
    <Link to={`/beers/${beer._id}`}>
      <article className="beer-card">
        <img src={beer.image_url} alt={beer.name} />
        <div>
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>
            <strong>Created by:</strong> {beer.contributed_by}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default BeerCard;
