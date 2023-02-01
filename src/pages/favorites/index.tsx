/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout';
import NoFavorites from '@/components/ui/NoFavorites/NoFavorites';
import { localFavorites } from '@/utilities';
import FavoritesPokemons from '@/components/ui/favoritesPokemons/FavoritesPokemons';


const index = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons())
    }, [])

    return (
        <Layout title='Favorites'>
            {
                favoritePokemons.length === 0 ?
                    <NoFavorites /> :
                    <FavoritesPokemons favoritePokemons={favoritePokemons} />
            }


        </Layout>
    )
}

export default index