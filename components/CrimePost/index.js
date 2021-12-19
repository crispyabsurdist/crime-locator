import Link from 'next/link'
import styles from './CrimePost.module.scss'

export default function CrimePost({ data }) {
  // function parseShittyApiRawData(html) {
  //   let doc = new DOMParser().parseFromString(html, 'text/html')
  //   return doc.body.textContent || ''
  // }

  return (
    <div className={`col-md-6 mb-4 d-flex`}>
      <div className={`${styles.crimePost}`}>
        <h3>{data.title_type}</h3>
        <h4>{data.title_location}</h4>
        <small>{data.date_human}</small>
        <p>{data.content_teaser}</p>
        <Link href={data.external_source_link}>
          <a rel="no-referrer noopener" target="_blank">Läs vidare om ärendet</a>
        </Link>
      </div>
    </div>
  )
}
