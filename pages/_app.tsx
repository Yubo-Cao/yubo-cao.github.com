import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { Inter } from "@next/font/google";
import localFont from "@next/font/local";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter"
});

const materialSymbolsRounded = localFont({
    src: "./fonts/MaterialSymbolsRounded.woff2",
    variable: "--font-material-symbols-rounded"
});
const materialSymbolsOutlined = localFont({
    src: "./fonts/MaterialSymbolsOutlined.woff2",
    variable: "--font-material-symbols-outlined"
});
const materialSymbolsSharp = localFont({
    src: "./fonts/MaterialSymbolsSharp.woff2",
    variable: "--font-material-symbols-sharp"
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
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            </Head>
            <div
                className={`${inter.variable} ${materialSymbolsRounded.variable} ${materialSymbolsOutlined.variable} ${materialSymbolsSharp.variable} font-sans`}
            >
                <Component {...pageProps} />
            </div>
        </>
    );
};

export default App;
