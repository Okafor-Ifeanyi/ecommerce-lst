import React from "react";
import { ChartIcon, ClockIcon, NextIcon } from "../../assets/svg/Icons"
import styles from "./FeaturedPosts.module.css"

interface PostsProps {
    imageSrc: string;
}
const  Posts: React.FC<PostsProps> = ({imageSrc}) => {
  return (
    <main className={styles.Post} >
        <div className={styles.PostImage}>
            <img src={imageSrc} alt="posts" /> 
        </div>
        <article className={styles.PostArticle}>
            <nav>
                <ul>
                    <li>
                        <a href="#" className={styles.highlight}>Google</a>
                    </li>
                    <li>
                        <a href="#">Trending</a>
                    </li>
                    <li>
                        <a href="#">New</a>
                    </li>
                </ul>
            </nav>
            <h4 className={styles.PostArticleMain}>Loudest à la Madison #1 (L'integral)</h4>
            <p className={styles.PostArticleSub}>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <div className={styles.PostArticleDetails}>
                <p><span className={styles.PostArticleDetailsIcon}><ClockIcon width={16} height={16} color="#23A6F0"/></span><span>22 April 2021</span></p>
                <p><span className={styles.PostArticleDetailsIcon}><ChartIcon width={16} height={16} color="#23856D"/></span>10 comments</p>
            </div>
            <h6 className={styles.PostArticleNext}><span>Learn More</span> <span><NextIcon className={styles.PostArticleDetailsIcon} width={24} height={24} /></span></h6>
        </article>
    </main>
  )
}

export default Posts