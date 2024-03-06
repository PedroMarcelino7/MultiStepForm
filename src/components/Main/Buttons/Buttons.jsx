import styles from './Buttons.module.scss'

export default function Buttons() {
    return(
        <section className={styles.button_container}>
            <button className={styles.go_back}>Go Back</button>
            <button className={styles.next}>Next Step</button>
        </section>
    )
}