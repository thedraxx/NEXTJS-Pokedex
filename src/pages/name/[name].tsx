/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next';
import { pokeAPI } from '@/api';
import { Pokemon } from '@/interfaces/pokemonFull';
import { PokemonsListResponse } from '@/interfaces/pokemonsInterface';
import Layout from '@/components/layouts/Layout';
import getPokemonInfo from '@/utilities/getPokemonInfo';


interface Props {
    pokemon: Pokemon
}

const index = ({ pokemon }: Props) => {
    return (
        <Layout title={pokemon.name}>
            {pokemon.name}
        </Layout>
    )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const { data } = await pokeAPI.get<PokemonsListResponse>(`/pokemon?limit=151`)

    return {
        paths: data.results.map((pokemon: any) => ({
            params: { name: pokemon.name }
        })),

        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    // Leemos el id de la url de getStaticPaths
    const { name } = params as { name: string };

    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}


export default index