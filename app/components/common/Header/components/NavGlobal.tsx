import Link from 'next/link';
import styles from './NavGlobal.module.scss';

const NavGlobal = () => {
    return (
        <>
            <ul className={`${styles['l-header__gnavi']}`}>
                <li data-menu-active="" className={`${styles['l-header__gnavi__item']}`}>
                    <Link href="/" className={`${styles['l-header__gnavi__link']}`}>hello</Link>
                </li>
                <li data-menu-active="" className={`${styles['l-header__gnavi__item']}`}>
                    <Link href="/blog" className={`${styles['l-header__gnavi__link']}`}>blog</Link>
                </li>
                <li data-menu-active="" className={`${styles['l-header__gnavi__item']}`}>
                    <Link href="/contact" className={`${styles['l-header__gnavi__link']}`}>contact</Link>
                </li>
            </ul>
        </>
    );
};

export default NavGlobal;