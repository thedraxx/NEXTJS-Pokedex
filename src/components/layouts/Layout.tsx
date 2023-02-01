import Head from 'next/head'
import React from 'react'
import Navbar from '../ui/navbar/Navbar';
interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

const origin = (process.env.NODE_ENV === 'development') ? 'http://localhost:3000' : 'https://pokemon-app-psi.vercel.app'

const Layout = ({ children, title }: LayoutProps) => {

    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="app" content="Pokemon App" />
                <meta name="descripcion" content={`Informacion sore el pokemon: ${title}`} />
                <meta name="keywords" content={`${title}`} />
                <meta property="og:title" content={`Informacion sobre...${title}`} />
                <meta property="og:description" content={`Esta es la pagina sobre ${title}`} />
                <meta property="og:image" content={origin} />
            </Head>

            <Navbar />
            <main style={{
                padding: '1rem 1rem'
            }}>
                {children}
            </main>
        </>
    )
}

export default Layout