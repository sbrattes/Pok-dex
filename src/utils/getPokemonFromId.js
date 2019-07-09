import pokedexJson from '../data/pokedex';

export default function Pokemon(id){
  return pokedexJson.pokemon.find(pokemon => pokemon.id === id);
}