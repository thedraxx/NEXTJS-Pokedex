import React from 'react'
import { Grid, Card } from '@nextui-org/react'
import { useRouter } from 'next/router'

interface Props {
    pokemonId: number
}


const FavoriteCardPokemon = ({ pokemonId }: Props) => {

    const router = useRouter()

    const onFavoriteClick = () => {
        router.push(`/pokemon/${pokemonId}`)
    }

    return (
        <Grid xs={6} sm={3} md={2} lg={1} key={pokemonId}>
            <Card isHoverable isPressable css={{ padding: 10 }}>
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
                    width={"100%"}
                    height={"100%"}
                    onClick={() => onFavoriteClick()}
                />
            </Card>
        </Grid>
    )

}

export default FavoriteCardPokemon