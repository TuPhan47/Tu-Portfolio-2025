
import Image from 'next/image';
import styles from './MainVisualTop.module.scss';
import NavAnchor from './components/NavAnchor';

const MainVisualTop = () => {
    return (
        <div id="mv-top" className={`${styles['mv']}`}>
            <div className={`${styles['mv__inner']}`}>
                <h1 className={`${styles['mv__sign']}`}><Image src="/images/top/img-sign.svg" width={411} height={308} alt='' /></h1>
                <div className={`${styles['mv__profile']}`}>
                    
                </div>
                <div className={`${styles['mv__cont']}`}>
                    <h2 className={`${styles['mv__title']} hdg-lv2`}>Head line</h2>
                    <p className={`${styles['mv__txt']} txt-base`}>Frontend Web Developer with 7 years of experience in building and optimizing user interfaces. Additionally, I have 3 years of backend experience, allowing me to create seamless and efficient web applications.</p>
                </div>
            </div>
            <NavAnchor />
        </div>
    );
};

export default MainVisualTop;