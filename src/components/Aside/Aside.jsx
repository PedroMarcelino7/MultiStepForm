import styles from './Aside.module.scss'

export default function Aside() {
    return (
        <aside className={styles.steps_container}>
            <div className={styles.steps_box}>
                <div className={`${styles.step} ${styles.selected}`}>
                    <h6>1</h6>
                </div>

                <div className={styles.step_description}>
                    <h3>STEP 1</h3>
                    <h2>YOUR INFO</h2>
                </div>
            </div>

            <div className={styles.steps_box}>
                <div className={styles.step}>
                    <h6>2</h6>
                </div>

                <div className={styles.step_description}>
                    <h3>STEP 2</h3>
                    <h2>SELECT PLAN</h2>
                </div>
            </div>

            <div className={styles.steps_box}>
                <div className={styles.step}>
                    <h6>3</h6>
                </div>

                <div className={styles.step_description}>
                    <h3>STEP 3</h3>
                    <h2>ADD-ONS</h2>
                </div>
            </div>

            <div className={styles.steps_box}>
                <div className={styles.step}>
                    <h6>4</h6>
                </div>

                <div className={styles.step_description}>
                    <h3>STEP 4</h3>
                    <h2>SUMMARY</h2>
                </div>
            </div>
        </aside>
    )
}