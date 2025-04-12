import '../styles/globals.css'
import { GeistProvider, CssBaseline } from '@geist-ui/react'

// @ts-ignore
function MyApp({ Component, pageProps }) {
    return (
        <GeistProvider>
            <CssBaseline />
            <Component {...pageProps} />
        </GeistProvider>
    )
}

export default MyApp
