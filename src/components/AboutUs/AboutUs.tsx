import { EmptyStarIcon, SolidStarIcon } from "../../assets/svg/Icons"
import styles from "./AboutUs.module.css"

export const AboutUs = () => {
    return (
        <section className={styles.AboutUs} >
            <div className={styles.AboutUsWrap}>
                <main className={styles.AboutUsMain}>
                    <article className={styles.AboutUsArticle}>
                        <h3 className={styles.AboutUsHeader}>What they say about us</h3>
                        <div className={styles.AboutUsImageWrap}>
                            <img src="/images/user1.png" alt="" />
                        </div>

                        <div className={styles.AboutUsRating}>
                            <SolidStarIcon width={36} height={36}/>
                            <SolidStarIcon width={36} height={36} />
                            <SolidStarIcon width={36} height={36} />
                            <SolidStarIcon width={36} height={36} />
                            <EmptyStarIcon width={36} height={36} />
                        </div>

                        <p className={styles.AboutUsP}>Slate helps you see how many more days you need to work to reach your financial goal.</p>
                        <h6 className={styles.AboutUsAuthor}>Regina Miles</h6>
                        <h6 className={styles.AboutUsRole}>Designer</h6>

                    </article>
                    <div className={styles.AboutUsImages}>
                        <div className={styles.AboutUsImagesR1}>
                            <img src="/images/r1i1.jpg" alt="" />
                            <img src="/images/r1i2.jpg" alt="" />
                            <img src="/images/r1i3.jpg" alt="" />
                        </div>
                        <div className={styles.AboutUsImagesR2}>
                            <img src="/images/r2i1.jpg" alt="" />
                            <img src="/images/r2i2.jpg" alt="" />
                            <img src="/images/r2i3.jpg" alt="" />
                        </div>
                        <div className={styles.AboutUsImagesR3}>
                            <img src="/images/r3i1.jpg" alt="" />
                            <img src="/images/r3i2.jpg" alt="" />
                            <img src="/images/r3i3.jpg" alt="" />
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}