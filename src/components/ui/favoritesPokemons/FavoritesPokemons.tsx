import React from 'react'
import { Grid, Card } from '@nextui-org/react';
import FavoriteCardPokemon from '../FavoriteCardPokemon/FavoriteCardPokemon';

interface Props {
    favoritePokemons: number[]
}


const FavoritesPokemons = ({ favoritePokemons }: Props) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favoritePokemons.map((pokemonId) => {
                    return <FavoriteCardPokemon pokemonId={pokemonId} key={pokemonId} />
                })
            }
        </Grid.Container>
    )
}

export default FavoritesPokemons