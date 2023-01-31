import React from 'react'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { SmallPokemon } from '@/interfaces/pokemonsInterface';
import { useRouter } from 'next/router';

interface Props {
    pokemons: SmallPokemon[]
}
const PokemonCard = ({ pokemons }: Props) => {
    const router = useRouter();
    const onPokemonClick = (id: number) => {
        router.push(`/pokemon/${id}`)
    }
    return (
        <>
            <Grid.Container gap={2} justify='flex-start'>
                {
                    pokemons.map(pokemon => (
                        <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.name}>
                            <Card isHoverable>
                                <Card.Body css={{ p: 5 }}>
                                    <Card.Image
                                        src={pokemon.img}
                                        alt={pokemon.name}
                                        width='100%'
                                        height={150}
                                        onClick={() => onPokemonClick(pokemon.id)}
                                    />
                                </Card.Body>
                                <Card.Footer>
                                    <Row justify='space-between'>
                                        <Text transform='capitalize'>
                                            {pokemon.name}
                                        </Text>
                                        <Text>
                                            #{pokemon.id}
                                        </Text>
                                    </Row>
                                </Card.Footer>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid.Container>
        </>
    )
}

export default PokemonCard