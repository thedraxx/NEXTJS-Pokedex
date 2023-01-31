import { Link, Spacer, Text, useTheme, } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import NextLink from 'next/link'

const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: theme?.colors?.gray100.value,
        }}>

            <NextLink href="/" passHref>
                <Text color='white' h2>Pokemon</Text>
            </NextLink>

            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' width={50} height={50} alt='IconApp' />
            <Spacer css={{ flexGrow: 1 }} />

            <NextLink href="/favorites" passHref>
                <Text color='white'>Favoritos</Text>
            </NextLink>


        </div>
    )
}

export default Navbar