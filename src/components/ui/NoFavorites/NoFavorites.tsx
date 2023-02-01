import React from 'react'
import { Container, Text, Image } from '@nextui-org/react';

const NoFavorites = () => {
    return (
        <Container css={{
            display: 'flex',
            flexDirection: 'column',
            height: "calc(100vh - 100px)",
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center'
        }}>
            <Text h1>No Favorites</Text>
            <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg" alt="empty" css={{
                opacity: 0.8,
            }} />
        </Container>
    )
}

export default NoFavorites