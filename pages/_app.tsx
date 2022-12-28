import React from 'react';
import '../styles/globals.css';
import Head from 'next/head';

interface AppProps {
    Component: React.ComponentType;
    pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <title>Yubo Cao</title>
                <meta name="author" content="Yubo Cao" />
                <link rel="icon" href="/favicon.png" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default App;
