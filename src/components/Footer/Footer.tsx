import { FacebookIcon, InstagramIcon, TwitterIcon } from "../../assets/svg/Icons"
import styles from "./Footer.module.css"

export const Footer = () => {
    return (
        <footer className={styles.FooterSection}>
            <main className={styles.FooterTopWrap}>
                <div className={styles.FooterTop}>
                    <h1>Bandage</h1>
                    <div className={styles.ScrollHeader2FollowUsIcons}>
                        <FacebookIcon className={styles.ScrollHeaderSocials} color="#23A6F0"/>
                        <InstagramIcon className={styles.ScrollHeaderSocials} color="#23A6F0"/>
                        <TwitterIcon className={styles.ScrollHeaderSocials} color="#23A6F0"/>
                    </div>
                </div>
            </main>

                <div className={styles.FooterMidDetails}>
                    <div>
                        <h5><b>Company Info</b></h5>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are Hiring</p>
                        <p>Blog.</p>
                    </div>
                    <div>
                        <h5><b>Legal</b></h5>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are Hiring</p>
                        <p>Blog</p>
                    </div>
                    <div>
                        <h5><b>Features</b></h5>
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </div>
                    <div>
                        <h5><b>Resources</b></h5>
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </div>
                    <div>
                        <h5><b>Get In Touch</b></h5>
                        <div className={styles.FooterMidSubscribe}>
                            <input type="text" name="" id="" placeholder="Your Email"/>
                            <button>Subscribe</button>
                        </div>
                       
                        <p>Lore imp sum dolor Amit</p>
                    </div>
                </div>
                <main className={styles.FooterTopWrap}>
                    <div className={styles.FooterBottom}>
                        <h6>Made With Love By <span>Finland All Right Reserved</span> </h6>
                    </div>
                </main>
                
            
        </footer>
    )
}