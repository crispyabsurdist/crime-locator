import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Favorites() {
  const [item, setItem] = useState([])

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const localStorage_index = localStorage.key(i)
      const post = localStorage.getItem(localStorage_index)

      if (post) {
        setItem((arr) => arr.concat(JSON.parse(post)))
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Crime Locator - Favoriter</title>
      </Head>
      <Header title="Mina favoritbrott" />
      <div className={`container`}></div>
      {item.map((fav, index) => {
        return (
          <div key={index}>
            {fav.image}
            {fav.title}
            {fav.location}
            {fav.teaser}
            {fav.teaser}
          </div>
        )
      })}
      <Footer />
    </>
  )
}
