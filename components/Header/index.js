import styles from './Header.module.scss'

export default function Header({ title }) {
  return (
    <div className={`${styles.headerSection}`}>
      <h1 className="title">{title}</h1>
    </div>
  )
}
