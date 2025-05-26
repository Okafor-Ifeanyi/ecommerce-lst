import { BookIcon, EasyWinIcon, GrowthArrowIcon } from "../../assets/svg/Icons"
import styles from "./Bestservice.module.css"
import { Services } from "./Services"

export const BestService = () => {
    return (
        <section className={styles.productSection}>
            <div className={styles.productWrapper}>
                <article className={styles.description}>
                    <h1 className={styles.HeaderGray}>Featured Products</h1>
                    <h1 className={styles.HeaderMain}>THE BEST SERVICES</h1>
                    <p className={styles.HeaderGray}>Problems trying to resolve the conflict between </p>
                </article>

                <main className={styles.productServices}>
                <Services
                    title="Easy Wins"
                    description="Get your best looking smile now!"
                    icon={<EasyWinIcon stroke="#23A6F0" width={73} height={72} />}
                />
    
                <Services
                    title="Concrete"
                    description="Defalcate is most focused in helping you discover your most beautiful smile"
                    icon={<BookIcon stroke="#23A6F0" width={73} height={72} />}
                />

                <Services
                    title="Hack Growth"
                    description="Overcame any hurdle or any other problem."
                    icon={<GrowthArrowIcon stroke="#23A6F0" width={73} height={72} />}
                />
                </main>

            </div>
        </section>
    )
}