import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LocationQuery from '../components/LocationQuery'
import IndexQuery from '../components/IndexQuery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Crime Locator</title>
      </Head>
      <Header title="Crime Locator" />
      <LocationQuery />
      <IndexQuery />
      <Footer />
    </>
  )
}
