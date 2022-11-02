// In this file I set everything relating to the meta stuff and font for everything else
import dynamic from 'next/dynamic'
import Head from 'next/head'
// file imports

const Main = ({ children, router }: any) => {
    return (
        <div className="font-fira">
            <div>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <meta name="description" content="Thamognya's HomePage" />
                    <meta name="author" content="Thamognya Kodi" />
                    <meta name="keywords" content="Thamognya, Kodi, Links" />
                    <link rel="shortcut icon" href="/assets/pfp.png" />
                    <title>Sample File</title>
                </Head>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default Main
