'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '../ui/Container';
import styles from './Header.module.scss';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <Container>
        <ul className={styles.header__nav}>
          <li className={pathname == '/' ? `${styles.header__link} ${styles.active}` : `${styles.header__link}`}>
            <Link href='/'>Home</Link>
          </li>
          <li className={pathname == '/portfolio' ? `${styles.header__link} ${styles.active}` : `${styles.header__link}`}>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li className={pathname == '/contacts' ? `${styles.header__link} ${styles.active}` : `${styles.header__link}`}>
            <Link href='/contacts'>Contacts</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;