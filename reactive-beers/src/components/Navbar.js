import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/"><span role="img" aria-label="Link to home">🏠</span></Link>
    </nav>
  );
}

export default Navbar;
