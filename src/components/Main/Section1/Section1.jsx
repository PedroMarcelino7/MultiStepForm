import styles from './Section1.module.scss'

export default function Section1() {
    return (
        <section>
            <form>
                <div className={styles.input_box}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='e.g. Stephen King' id='name' />
                </div>
                
                <div className={styles.input_box}>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" placeholder='e.g. stephenking@lorem.com' id='email' />
                </div>
                
                <div className={styles.input_box}>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" placeholder='e.g. +1 234 567 890' id='phone' />
                </div>
            </form>
        </section>
    )
}