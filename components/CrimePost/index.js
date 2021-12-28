import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import FavoriteButton from '../FavoriteButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import styles from './CrimePost.module.scss'

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
            <h3>{`${data.title_type}`}</h3>
            <FavoriteButton post={data} />
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
