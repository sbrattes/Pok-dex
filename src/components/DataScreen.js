import React from 'react';
import DataTable from './DataTable'
import '../styles/DataScreen.css';

const DataScreen = ({pokemon}) => {
    return (
      <div>
        {pokemon ? (
          <div className="dataScreen">
            <div className="pokeImage">
              <img src={pokemon.img} alt="pokemon_image" />
            </div>
              <DataTable pokemon={pokemon}/>
            </div>
        ) : <div className="dataScreen" />}
      </div>
    );
}

export default DataScreen;