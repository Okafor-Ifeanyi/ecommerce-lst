import styles from "./Hero.module.css"

export const Hero = () => {
    return (
        <main className={styles.main}>
            <div className={styles.secondMain}>
                <section className={styles.section1}>
                            <article className={styles.articleTag}>
                                <div className={styles.items}><p>5 Items</p></div>
                                <h1 className={styles.furniture}>FURNITURE</h1>
                                <h4 className={styles.readMore}><b>Read More</b></h4>
                            </article>
                </section>
                <section className={styles.section2}>
                    <div className={styles.upperBox}>
                            <article className={styles.articleTag}>
                                <div className={styles.items}><p>5 Items</p></div>
                                <h1 className={styles.furniture}>FURNITURE</h1>
                                <h4 className={styles.readMore}><b>Read More</b></h4>
                            </article>
                    </div>
                    <div className={styles.lowerBox}>
                        <div className={styles.twinBox}>
                            <article className={styles.articleTag}>
                                <div className={styles.items}><p>5 Items</p></div>
                                <h1 className={styles.furniture}>FURNITURE</h1>
                                <h4 className={styles.readMore}><b>Read More</b></h4>
                            </article>
                        </div>

                        <div className={styles.twinBox}>
                            <article className={styles.articleTag}>
                                <div className={styles.items}><p>5 Items</p></div>
                                <h1 className={styles.furniture}>FURNITURE</h1>
                                <h4 className={styles.readMore}><b>Read More</b></h4>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}