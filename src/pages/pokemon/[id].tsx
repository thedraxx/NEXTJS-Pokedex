import React from 'react'
import Layout from '@/components/layouts/Layout'
import { GetStaticProps, GetStaticPaths } from 'next';
import { pokeAPI } from '@/api';
import { Pokemon } from '@/interfaces/pokemonFull';
import { Grid, Card, Text, Button, Container, Image } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface Props {
    pokemon: any
}

const pokemonPage = ({ pokemon }: Props) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();

    const NavigateFavorites = (id: number) => {
        router.push(`/favorites`)
    }


    return (
        <Layout title='Algun pokemon'>
            <Grid.Container css={{ marginTop: "5px" }} gap={2}>
                <Grid xs={12} md={6}>
                    <Card isHoverable css={{ padding: "20px" }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || "no image"}
                                alt={pokemon.name}
                                css={{ width: "100%", height: "auto" }}
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
                        <Button color="gradient" ghost>Add Favorite</Button>
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
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

    // Leemos el id de la url de getStaticPaths
    const { id } = params as { id: string };

    const { data } = await pokeAPI.get<Pokemon>(`/pokemon/${id}`);

    return {
        props: {
            pokemon: data
        }
    }
}

export default pokemonPage