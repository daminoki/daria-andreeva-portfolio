import Image from 'next/image';
import AboutMe from '@/components/AboutMe';
import Stack from '@/components/Stack';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <AboutMe></AboutMe>
      <Stack></Stack>
    </div>
  );
}
