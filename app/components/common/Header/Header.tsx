import Image from 'next/image';
import styles from './Header.module.scss';
import Link from 'next/link';
import NavGlobal from './components/NavGlobal';

const Header = () => {
    return (
        <header id={`${styles['l-header']}`} className={`${styles['l-header']}`}>
            <div className={`${styles['l-header__wrapper']}`}>
                <h1 className={`${styles['l-header__logo']}`}>
                    <Link href="/"><Image src="/images/common/logo-tuphan.png" alt='Web Developer - Tu Phan' width={165} height={72} /></Link>
                </h1>
                {/* <a className="nav-global-menu">
                    <p className="nav-global-menu__txt"></p>
                    <div className="nav-global-menu__line">
                        <span className="b1"></span>
                        <span className="b2"></span>
                    </div>
                </a> */}
                <nav className="l-header__content">
                    <div className="l-header__content__inner">
                        <div className="l-header__mark">
                            <a className="l-header__mark__logo" href="/20th/"></a>
                            <p className="l-header__mark__txt"></p>
                        </div>
                        <div className={`${styles['l-header__tel']}`}><Link href="tel:0965216293" className={`${styles['l-header__tel__txt']}`}>tel: 0965216293</Link></div>
                        <NavGlobal />
                        <p className={`${styles['l-header__copyR']}`}>&copy; Tuphan. All Rights Reserved.</p>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;