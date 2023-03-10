import { Inter } from "next/font/google";
import Head from "next/head";
import React from "react";
import "@/styles/globals.css";
import "@/styles/title.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "block"
});

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
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
            </Head>
            <div className={`${inter.variable} font-sans`}>
                <Component {...pageProps} />
            </div>
        </>
    );
};

export default App;
