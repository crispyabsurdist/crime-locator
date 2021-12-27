import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import styles from './CrimePost.module.scss'

function FavoriteButton(post) {
  const [favorite, setFavorite] = useState(false)
  const currentlyAFavorite = <FontAwesomeIcon icon={faHeart} />
  const notCurrentlyAFavorite = <FontAwesomeIcon icon={faHeartBroken} />

  const toggleFavorite = () => {
    const obj = {
      id: post.post.id,
      image: post.post.image,
      title: post.post.title_type,
      location: post.post.title_location,
      date: post.post.date_human,
      teaser: post.post.content_teaser,
      link: post.post.external_source_link,
    }

    setFavorite((favorite) => {
      if (favorite == true) {
        localStorage.removeItem(obj.id, JSON.stringify(obj))
      }
      if (favorite == false) {
        localStorage.setItem(obj.id, JSON.stringify(obj))
      }
      return !favorite
    })
  }

  return (
    <button
      className={`${styles.crimeFav}`}
      onClick={() => toggleFavorite(post)}
      key={post.id}
    >
      {favorite === true ? currentlyAFavorite : notCurrentlyAFavorite}
    </button>
  )
}

export default function CrimePost({ data }) {
  return (
    <div className={`col-md-6 d-flex`}>
      <div className={`${styles.crimePost}`}>
        <section className={`${styles.crimePostMapImage}`}>
          {data.image ? (
            <Image
              src={data.image}
              alt="kartbild"
              layout="fill"
              objectFit="cover"
            />
          ) : (
            <span className={`${styles.noImage}`}>Ingen bild genererad.</span>
          )}
        </section>
        <section>
          <div className={`${styles.postHeader}`}>
            <h3>{data.title_type}</h3>
            <FavoriteButton post={data} />
          </div>
          <h4>{data.title_location}</h4>
          <small>{data.date_human}</small>
          <p>{data.content_teaser}</p>
          <Link href={data.external_source_link}>
            <a rel="no-referrer noopener" target="_blank">
              Läs vidare om ärendet
            </a>
          </Link>
        </section>
      </div>
    </div>
  )
}
