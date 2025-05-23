import Posts from "./Posts"
import styles from "./FeaturedPosts.module.css"

export const FeeaturedPosts = () => {
    return (
        <section className={styles.featuredPosts}>
            <div className={styles.featuredPostsWrapper}>
                <article className={styles.description}>
                    <p className={styles.headerGray}>Practice Advice</p>
                    <h1 className={styles.headerMain}>Featured Posts</h1>
                </article>

                <main className={styles.Posts}>
                    <Posts imageSrc="/images/post1.jpg"/>
                    <Posts imageSrc="/images/post2.jpg"/>
                    <Posts imageSrc="/images/post3.jpg"/>
                </main>

            </div>
        </section>
    )
}