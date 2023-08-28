'use client';

import Link from 'next/link';
import Container from '../ui/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.footer__container}>
          <p className={styles.footer__copyrights}>&copy; Andreeva Daria {new Date().getFullYear()}</p>
          <ul className={styles.footer__socials}>
            <li className={styles.footer__social}>
              <a href='https://github.com/daminoki' target='_blank'>
                <GitHubIcon sx={{
                  color: '#FFFFFF80',
                  transition: 'color .2s ease-in-out',
                  ':hover': {
                    color: '#FFFFFF',
                  }
                }}/>
              </a>
            </li>
            <li className={styles.footer__social}>
              <a href='https://www.instagram.com/aminokislota1408/' target='_blank'>
                <InstagramIcon sx={{
                  color: '#FFFFFF80',
                  transition: 'color .2s ease-in-out',
                  ':hover': {
                    color: '#FFFFFF',
                  }
                }}/>
              </a>
            </li>
            <li className={styles.footer__social}>
              <a href='mailto:d.andreeva1408@gmail.com' target='_blank'>
                <AlternateEmailIcon sx={{
                  color: '#FFFFFF80',
                  transition: 'color .2s ease-in-out',
                  ':hover': {
                    color: '#FFFFFF',
                  }
                }}/>
              </a>
            </li>
            <li className={styles.footer__social}>
              <Link href='/cv.pdf' target='_blank' locale={false}>
                <PictureAsPdfIcon sx={{
                  color: '#FFFFFF80',
                  transition: 'color .2s ease-in-out',
                  ':hover': {
                    color: '#FFFFFF',
                  }
                }}/>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;