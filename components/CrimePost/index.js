import Link from 'next/link'
import Image from 'next/image'
import styles from './CrimePost.module.scss'

export default function CrimePost({ data }) {
  // function parseShittyApiRawData(html) {
  //   let doc = new DOMParser().parseFromString(html, 'text/html')
  //   return doc.body.textContent || ''
  // }

  console.log(data.image)

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
          ) : (<span className={`${styles.noImage}`}>Ingen bild genererad.</span>)}
        </section>
        <section>
          <h3>{data.title_type}</h3>
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
