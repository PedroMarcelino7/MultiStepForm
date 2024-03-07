import styles from './Step2.module.scss'

import ArcadeIMG from '../../../assets/images/icon-arcade.svg'
import AdvancedIMG from '../../../assets/images/icon-advanced.svg'
import ProIMG from '../../../assets/images/icon-pro.svg'
import { useState } from 'react'

export default function Step2() {
    const [payment, setPayment] = useState(true)

    return (
        <section>
            <div className={styles.box_container}>
                <div className={`${styles.box} ${styles.selected}`}>
                    <figure>
                        <img src={ArcadeIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Arcade</h2>
                        {payment &&
                            <h3>$9/mo</h3>
                        }
                    </div>
                </div>

                <div className={styles.box}>
                    <figure>
                        <img src={AdvancedIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Advanced</h2>
                        {payment &&
                            <h3>$12/mo</h3>
                        }
                    </div>
                </div>

                <div className={styles.box}>
                    <figure>
                        <img src={ProIMG} alt="Arcade" />
                    </figure>

                    <div className={styles.description}>
                        <h2>Pro</h2>
                        {payment &&
                            <h3>$15/mo</h3>
                        }
                    </div>
                </div>
            </div>

            <div className={styles.option_container}>
                <h3 className={styles.selected}>Monthly</h3>

                <div className="form-check form-switch" onClick={() => setPayment(!payment)}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>

                <h3>Yearly</h3>
            </div>
        </section>
    )
}