import React from 'react';
import PokeCell from '../components/PokeCell';
import '../styles/PokeList.css';

const PokeList = ({ handleOnClick, pokedexList }) => {
  const pokeCells = pokedexList.map(pokemon => {
    return (
      <PokeCell
        key={pokemon.id}
        id={pokemon.id}
        num={pokemon.num}
        name={pokemon.name}
        image={pokemon.img}
        handleOnClick={handleOnClick}
      />
    );
  });
  return (
    <div className='pokeList'>
      {pokeCells}
    </div>
  );
};

export default PokeList;