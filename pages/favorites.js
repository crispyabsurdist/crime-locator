import Head from 'next/head'
import { useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Favorites() {
  useEffect(() => {
    for (var i = 0; i < localStorage.length; i++) {
      var localStorage_index = localStorage.key(i)
      var crime_object = localStorage.getItem(localStorage_index)
      console.log(localStorage_index + ' value: ' + crime_object)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Crime Locator - Favoriter</title>
      </Head>
      <Header title="Mina favoritbrott" />
      <Footer />
    </>
  )
}
