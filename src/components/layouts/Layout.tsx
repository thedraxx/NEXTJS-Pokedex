import Head from 'next/head'
import React, { FC } from 'react'
import Navbar from '../ui/navbar/Navbar';

interface LayoutProps {
    children: React.ReactNode,
    title?: string
}

const Layout = ({ children, title }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="app" content="Pokemon App" />
                <meta name="descripcion" content={`Informacion sore el pokemon: ${title}`} />
                <meta name="keywords" content={`${title}`} />
            </Head>

            <Navbar />
            <main style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem 2rem',
            }}>
                {children}
            </main>

        </>
    )
}

export default Layout