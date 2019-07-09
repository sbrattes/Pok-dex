import poxedexJson from '../data/pokedex';

export default function getEvolutions(pokemon) {
  const previousEvos = pokemon && pokemon.prev_evolution
      ? pokemon.prev_evolution.map(prev => prev.num) : [];
  const nextEvos = pokemon && pokemon.next_evolution
      ? pokemon.next_evolution.map(next => next.num) : [];
  let mergedEvos = [];

  const evoList = mergedEvos.concat(previousEvos, nextEvos);
  return poxedexJson.pokemon.filter(pokemon => evoList.includes(pokemon.num));
}