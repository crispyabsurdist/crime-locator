import styles from './Header.module.scss'

export default function Header({ title, location }) {
  return (
    <div className={`${styles.headerSection}`}>
      <h2 className="title">
        {title} {location && <span>{location}</span>}
      </h2>
    </div>
  )
}
