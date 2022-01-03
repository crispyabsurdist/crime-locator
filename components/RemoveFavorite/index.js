import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './RemoveFavorite.module.scss'

export default function RemoveFavorite(post) {
  const [favorite, removeFavorite] = useState(true)
  const Cross = <FontAwesomeIcon className={`${styles.cross}`} icon={faPlus} />
  const router = useRouter()

    const removeFavoriteFunction = () => {
      const obj = {
        id: post.post.id,
        image: post.post.image,
        title_type: post.post.title_type,
        title_location: post.post.title_location,
        date_human: post.post.date_human,
        content_teaser: post.post.content_teaser,
        external_source_link: post.post.external_source_link,
      }

      removeFavorite((favorite) => {
        if (favorite == true) {
          localStorage.removeItem(obj.id, obj)
        }
        return !favorite
      })
    }

  return (
    <button
      className={`${styles.crimeFav}`}
      onClick={() => removeFavoriteFunction()}
      key={post.id}
    >
      {Cross}
    </button>
  )
}
