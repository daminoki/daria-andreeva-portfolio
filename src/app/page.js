import Image from 'next/image';
import AboutMe from '@/components/AboutMe';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <AboutMe></AboutMe>
    </div>
  );
}
