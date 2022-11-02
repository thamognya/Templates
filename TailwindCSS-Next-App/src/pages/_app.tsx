import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import Main from '../components/layouts/main'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Main>
                <Component {...pageProps} />
            </Main>
        </>
    )
}

export default MyApp
