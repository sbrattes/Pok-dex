import React from 'react';
import PokeList from './PokeList';
import DataScreen from './DataScreen';
import EvoScreen from './EvoScreen';
import pokeLogo from '../images/pokemon_logo.png';
import SearchBar from '../components/SearchBar';
import getPokemonFromId from '../utils/getPokemonFromId';
import pokedexJson from '../data/pokedex';
import '../styles/PokeApp.css';

class PokeApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPokemon: null,
      pokedexList: pokedexJson.pokemon.map(pokemon => 
        pokemon).sort((a, b) => a.name.localeCompare(b.name))
    };
    this.handleOnClick = this.handleOnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleOnClick(id){
    const pokemon = getPokemonFromId(id);
    this.setState({ pokemon })
  };

  handleInputChange(value){
    const currentList = pokedexJson.pokemon.map(pokemon => pokemon)
      .sort((a, b) => a.name.localeCompare(b.name));
    if (value !== '') {
      const filteredPokedexList = currentList.filter(
        pokemon =>
          pokemon.num.toUpperCase().includes(value.toUpperCase()) ||
          pokemon.name.toUpperCase().includes(value.toUpperCase())
      );
      this.setState({ pokedexList: filteredPokedexList });
    } else {
      this.setState({
        pokedexList: currentList
      });
    }
  }
  render() {
   const { pokemon, pokedexList } = this.state;
    return (
      <div className='app'>
        <div className='header'>
          <img src={pokeLogo} alt='pokemon_logo.png' />
        </div>
        <div className='pokedex'>
          <div>
            <SearchBar
              handleInputChange={this.handleInputChange}
            />
            <PokeList
              pokedexList={pokedexList}
              handleOnClick={this.handleOnClick}
            />
          </div>
          <div className='screenWrapper'>
            <DataScreen pokemon={pokemon} />
            <EvoScreen
              pokemon={pokemon}
              handleOnClick={this.handleOnClick}
            />
          </div>
        </div>
        <div className='footer' />
      </div>
    );
  }
}

export default PokeApp;

