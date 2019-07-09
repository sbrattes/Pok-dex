import React from 'react';
import PokeCell from './PokeCell';
import getEvolutions from '../logic/getEvolutions';
import '../styles/EvoScreen.css';

const EvoScreen = ({ pokemon, handleOnClick }) => {
  const evolutions = getEvolutions(pokemon);
  const title = evolutions === undefined || evolutions.length === 0 ? 'No evolutions available'  : 'Evolutions';
  return (
    <div>
      {pokemon ? (
        <div className='evoScreen'>
          <h1>{title}</h1>
          <div className='evoInfo'>
            {evolutions.map(evolution => {
              return (
                <PokeCell
                  key={evolution.id}
                  id={evolution.id}
                  num={evolution.num}
                  name={evolution.name}
                  image={evolution.img}
                  handleOnClick={handleOnClick}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className='evoScreen' />
      )}
    </div>
  );
};

export default EvoScreen;
