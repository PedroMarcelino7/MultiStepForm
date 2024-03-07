import styles from './Section2Month.module.scss'

import ArcadeIMG from '../../../assets/images/icon-arcade.svg'
import AdvancedIMG from '../../../assets/images/icon-advanced.svg'
import ProIMG from '../../../assets/images/icon-pro.svg'

export default function Section2Month() {
    return (
        <section>
            <div className={styles.box_container}>
                <div className={`${styles.box} ${styles.selected}`}>
                    <figure>
                        <img src={ArcadeIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Arcade</h2>
                        <h3>$9/mo</h3>
                    </div>
                </div>

                <div className={styles.box}>
                    <figure>
                        <img src={AdvancedIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Advanced</h2>
                        <h3>$12/mo</h3>
                    </div>
                </div>

                <div className={styles.box}>
                    <figure>
                        <img src={ProIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Pro</h2>
                        <h3>$15/mo</h3>
                    </div>
                </div>
            </div>

            <div className={styles.option_container}>
                <h3>Monthly</h3>

                <div class="form-check form-switch shadow-none">
                    <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>

                <h3>Yearly</h3>
            </div>
        </section>
    )
}