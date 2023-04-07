import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import '../styles/globals.css'
import NavBar from '../components/nav-bar'

export default function App({ Component, pageProps: { session, ...pageProps } }) {

  return (
    <SessionProvider session={pageProps.session}>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </SessionProvider>
  )

}
