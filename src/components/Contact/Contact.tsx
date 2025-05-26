import styles from "./Contact.module.css"

export const Contact = () => {
    return (
        <section className={styles.ContactSection}>
            <main className={styles.ContactMain}>
                <article className={styles.ContactArticle}>
                    <h6 className={styles.ContactArticlePBlue}>Designing Better Experience</h6>
                    <h2 className={styles.ContactArticleMain}>Problems trying to resolve the conflict between </h2>
                    <p className={styles.ContactArticleLight}>Problems trying to resolve the conflict between the two major realms of Classical physics: </p>
                    <h3 className={styles.ContactArticlePrice}>$16.48</h3>
                    <a href="tel:+2348129741530">
                        <button className={styles.ContactArticleButton}>
                            One Call Away
                        </button>
                    </a>
                </article>
            </main>
        </section>
    )
}