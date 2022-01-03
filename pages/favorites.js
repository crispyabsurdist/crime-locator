import Head from 'next/head'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FavoritePost from '../components/FavoritePost'

export default function Favorites() {
  const [item, setItem] = useState([])

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      const localStorage_index = localStorage.key(i)
      const post = localStorage.getItem(localStorage_index)

      if (post) {
        setItem((setItem) => setItem.concat(JSON.parse(post)))
      }
    }
  }, [])

  return (
    <>
      <Head>
        <title>Crime Locator - Favoriter</title>
      </Head>
      <Header title="Mina favoritposter" />
      <div className={`container`}>
        <div className={`row`}>
          {item.map((fav, index) => {
            return <FavoritePost key={index} data={fav} />
          })}
        </div>
      </div>
      <Footer />
    </>
  )
}
