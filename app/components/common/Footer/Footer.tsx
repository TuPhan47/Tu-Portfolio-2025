import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <footer id="l-footer" className={`${styles['l-footer']}`}>
            <div className={`${styles['l-footer__inner']}`}>
                <p className="l-footer__logo"><a href="/"><Image src="/images/common/logo-tuphan-footer.png" width={165} height={72} alt="" /></a></p>
                <p className={`${styles['l-footer__copyright']}`}>&copy; Tuphan. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;