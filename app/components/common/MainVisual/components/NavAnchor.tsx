import Link from 'next/link';
import styles from './NavAnchor.module.scss';

const NavAnchor = () => {
    return (
        <>
            <ul className={`${styles['nav-acr']}`}>
                <li className={`${styles['nav-acr__item']}`}><Link href="" className={`${styles['nav-acr__link']}`}>download cv</Link></li>
                <li className={`${styles['nav-acr__item']}`}><Link href="#skills" className={`${styles['nav-acr__link']}`}>skills</Link></li>
                <li className={`${styles['nav-acr__item']}`}><Link href="#experience" className={`${styles['nav-acr__link']}`}>experience</Link></li>
                <li className={`${styles['nav-acr__item']}`}><Link href="#projects" className={`${styles['nav-acr__link']}`}>projects</Link></li>
            </ul>
        </>
    );
};

export default NavAnchor;