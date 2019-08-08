import React from 'react';

function BeerDetails(props) {
  const { beer } = props;
  return (
    <article className="single-beer">
      <img src={beer.image_url} alt={beer.name} />
      <h2>{beer.name}</h2>
      <p>{beer.tagline}</p>
      <p>{beer.first_brewed}</p>
      <p>{beer.attenuation_level}</p>
      <p>{beer.description}</p>
      <p>{beer.contributed_by}</p>
      <button onClick={props.goBack}>Back</button>
    </article>
  );
}

export default BeerDetails;
