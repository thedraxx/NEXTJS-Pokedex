/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react'
import Layout from '@/components/layouts/Layout'
import { GetStaticProps, GetStaticPaths } from 'next';
import { Pokemon } from '@/interfaces/pokemonFull';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { localFavorites } from '@/utilities';
import confetti from 'canvas-confetti';
import getPokemonInfo from '@/utilities/getPokemonInfo';

interface Props {
    pokemon: Pokemon
}

const pokemonPage = ({ pokemon }: Props) => {

    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existsInFavorites(pokemon.id))

    const onToggleFavorite = () => {
        localFavorites.toggleFavorite(pokemon.id);
        setIsInFavorite(!isInFavorite);

        if (!isInFavorite) {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6, x: 0.7 }
            });

        }
    }

    return (
        <Layout title={pokemon.name}>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} md={6}>
                    <Card isHoverable css={{ padding: "100px" }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || "no image"}
                                alt={pokemon.name}
                                css={{ width: "100%", height: "auto", objectFit: "contain" }}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} md={6}>
                    <Card isHoverable css={{ padding: "20px" }}>
                        <Card.Body>
                            <Text h1 transform='capitalize' >{pokemon.name}</Text>
                            <p>Weight: {pokemon.weight}</p>
                            <p>Height: {pokemon.height}</p>
                            <p>Base experience: {pokemon.base_experience}</p>
                            <p>Abilities: {pokemon.abilities.map((ability: any) => ability.ability.name).join(", ")}</p>
                            <p>Types: {pokemon.types.map((type: any) => type.type.name).join(", ")}</p>
                            <Card.Footer>
                                <Container direction='row' display='flex'>
                                    <Image src={pokemon.sprites.front_default} alt={pokemon.name} />
                                    <Image src={pokemon.sprites.back_default} alt={pokemon.name} />
                                    <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} />
                                    <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} />
                                </Container>
                            </Card.Footer>
                        </Card.Body>
                        <Button color="gradient" ghost={!isInFavorite} onPress={onToggleFavorite}>Favorite</Button>
                    </Card>
                </Grid>
            </Grid.Container>
        </Layout>
    )
};



export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const pokemons151: string[] = [...Array(151)].map((value, index) => `${index + 1}`)

    return {
        // paths: [
        //     {
        //         params: {
        //             id: "1"
        //         }
        //     }
        // ],
        paths: pokemons151.map((id) => ({
            params: {
                id
            }
        })),
        // fallback: false
        fallback: "blocking"
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    // Leemos el id de la url de getStaticPaths
    const { id } = params as { id: string };

    const pokemon = await getPokemonInfo(id)

    if (!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        },
        revalidate: 86400
    }
}

export default pokemonPage