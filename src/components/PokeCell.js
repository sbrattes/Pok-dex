import React from 'react';
import '../styles/PokeCell.css';

const PokeCell = ( {id, num, name, image, handleOnClick }) => {
  const pokemonInfo = `${num} ${name}`;
  return (
    <button 
      className='pokeCell'
      onClick={() => handleOnClick(id)}
    >
      <img src={image} alt='pokemon_image' />
      {pokemonInfo}
    </button>
  );
};

export default PokeCell;
