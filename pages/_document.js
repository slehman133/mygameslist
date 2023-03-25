import { Html, Head, Main, NextScript } from 'next/document'
import NavBar from '../components/nav-bar'
import Footer from '../components/footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <NavBar />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
