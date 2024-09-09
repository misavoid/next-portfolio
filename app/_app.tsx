// pages/_app.tsx
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Delta+Gothic+One&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
