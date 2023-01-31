import React from 'react'
import Layout from '../components/layouts/Layout';
import { GetStaticProps } from 'next'
import pokeAPI from '../api/pokeAPI';
import { PokemonsListResponse, SmallPokemon } from '@/interfaces/pokemonsInterface';
import PokemonCard from '@/components/pokemon/PokemonCard';

interface Props {
  pokemons: SmallPokemon[]
}

const index = ({ pokemons }: Props) => {
  console.log(pokemons)
  return (
    <>
      <Layout title='Listado de Pokemons'>
        <PokemonCard pokemons={pokemons} />
      </Layout>
    </>
  )
}
// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeAPI.get<PokemonsListResponse>('/pokemon?limit=151')

  const pokemons: SmallPokemon[] = data.results.map((pokemon, index) => {
    const id = index + 1
    const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
    return {
      id,
      name: pokemon.name,
      img,
      url: pokemon.url
    }
  })

  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default index