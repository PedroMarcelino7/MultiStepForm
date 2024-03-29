import styles from './Header.module.scss'

export default function Header({ title, subtitle }) {
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </header>
    )
}