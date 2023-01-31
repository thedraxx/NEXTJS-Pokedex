import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {

    const { theme } = useTheme()

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 2rem',
            backgroundColor: theme?.colors?.gray100.value,
        }}>
            <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' width={50} height={50} alt='IconApp' />
            <Text color='white' h2>P</Text>
            <Text color='white'>okemon</Text>

            <Spacer css={{ flexGrow: 1 }} />
            <Text color='white'>Favoritos</Text>

        </div>
    )
}

export default Navbar