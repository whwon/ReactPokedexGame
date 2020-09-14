import React from 'react';
import { Link } from 'react-router-dom';

function StartingPokeBall() {

  return (
    <div className="pokeball">
      <Link to="/home">
        <div className="pokeball_button"></div>
      </Link>
    </div>
  );
}

export default StartingPokeBall;
