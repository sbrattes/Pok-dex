import React from 'react';
import "../styles/DataTable.css";

const DataTable = ({pokemon}) => {
    return (
      <div className="pokeData">
        <table>
          <tbody>
            <tr>
              <th>NUMBER:</th>
              <td>{pokemon.num}</td>
            </tr>
            <tr>
              <th>NAME:</th>
              <td>{pokemon.name}</td>
            </tr>
            <tr>
              <th>TYPE:</th>
              {pokemon.type.map(typ => {
                return <tr>{typ}</tr>;
              })}
            </tr>
            <tr>
              <th>HEIGHT:</th>
              <td>{pokemon.height}</td>
            </tr>
            <tr>
              <th>WEIGHT:</th>
              <td>{pokemon.weight}</td>
            </tr>
            <tr>
              <th>WEAKNESS:</th>
              {pokemon.weaknesses.map(weakness => {
                return <tr>{weakness}</tr>;
              })}
            </tr>
          </tbody>
        </table>
      </div>
    );
}

export default DataTable;