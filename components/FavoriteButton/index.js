import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons'
import styles from './FavoriteButton.module.scss'

export default function FavoriteButton(post) {
  const [favorite, setFavorite] = useState([])
  const isFav = <FontAwesomeIcon icon={faHeart} />
  const isNotFav = <FontAwesomeIcon icon={faHeartBroken} />

  const toggleFavorite = () => {
    const obj = {
      id: post.post.id,
      image: post.post.image,
      title_type: post.post.title_type,
      title_location: post.post.title_location,
      date_human: post.post.date_human,
      content_teaser: post.post.content_teaser,
      external_source_link: post.post.external_source_link,
    }

    setFavorite((favorite) => {
      if (favorite == true) {
        localStorage.removeItem(obj.id, obj)
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
      {favorite === true ? isFav : isNotFav}
    </button>
  )
}
