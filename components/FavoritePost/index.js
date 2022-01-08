import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPlus } from '@fortawesome/free-solid-svg-icons'
import styles from './FavoritePost.module.scss'

export default function FavoritePost({ data }) {
  const [className, setClassName] = useState('')
  const [favorite, removeFavorite] = useState(true)
  const Cross = <FontAwesomeIcon className={`${styles.cross}`} icon={faPlus} />

  const removeFavoriteFunction = () => {
    const obj = {
      id: data.id,
      image: data.image,
      title_type: data.title_type,
      title_location: data.title_location,
      date_human: data.date_human,
      content_teaser: data.content_teaser,
      external_source_link: data.external_source_link,
    }

    removeFavorite((favorite) => {
      if (favorite == true) {
        localStorage.removeItem(obj.id, obj)
        let htmlItem = document.getElementById(obj.id);
        htmlItem.parentNode.removeChild(htmlItem); 
      }
      return !favorite
    })
  }
  
  return (
    <div id={data.id} className={`col-md-6 d-flex`}>
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
            <h3>{`${data.title_type}`}</h3>
            <button
              className={`${styles.crimeFav}`}
              onClick={() => removeFavoriteFunction()}
              key={data.id}
            >
              {Cross}
            </button>
          </div>
          <h4>{`${data.title_location}`}</h4>
          <div className={`${styles.time}`}>
            <FontAwesomeIcon icon={faClock} />
            <small>{`${data.date_human}`}</small>
          </div>
          <p>{`${data.content_teaser}`}</p>
          <Link href={`${data.external_source_link}`}>
            <a rel="no-referrer noopener" target="_blank">
              Läs vidare om ärendet
            </a>
          </Link>
        </section>
      </div>
    </div>
  )
}
