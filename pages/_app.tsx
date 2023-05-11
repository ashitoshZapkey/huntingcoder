import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar.js'

export default function App({ Component, pageProps }) {
  return <>
        <Navbar />
        <Component {...pageProps} />
        </>
}
