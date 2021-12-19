import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationQuery from '../components/LocationQuery'
import IndexQuery from '../components/IndexQuery'

export default function Home() {
  return (
    <>
      <Head>
        <title>BrottsplatsHittaren</title>
      </Head>
      <Header title="BrottsplatsHittaren" />
      <IndexQuery />
      <LocationQuery />
      <Footer />
    </>
  )
}
