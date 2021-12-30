import styles from './Header.module.scss'

export default function Header({ title, location }) {
  return (
    <header className={`container`}>
      <div className={`row`}>
        <div className={`col-12 ${styles.pageHeader}`}>
          <h1 className="title">
            {title} {location && <span>{location}</span>}
          </h1>
        </div>
      </div>
    </header>
  )
}
