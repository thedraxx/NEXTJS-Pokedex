import { pokeAPI } from "@/api";
import { Pokemon } from "@/interfaces/pokemonFull";

const getPokemonInfo = async (pokemonNameOrID: string) => {
  const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${pokemonNameOrID}`);

  return {
    name: data.name,
    id: data.id,
    sprites: data.sprites,
    abilities: data.abilities,
    types: data.types,
  };
};

export default getPokemonInfo;
