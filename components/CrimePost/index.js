import styles from './crimePost.module.scss'

export default function CrimePost({ data }) {
  // function parseShittyApiRawData(html) {
  //   let doc = new DOMParser().parseFromString(html, 'text/html')
  //   return doc.body.textContent || ''
  // }

  return (
    <div>
      <h3>{data.description}</h3>
    </div>
  )
}
