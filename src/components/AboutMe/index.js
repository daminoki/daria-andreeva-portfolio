import Image from 'next/image';
import Container from '../ui/Container';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.about}>
      <Container>
        <h1 className={styles.about__title}>About Me</h1>
        <div className={styles.about__container}>
          <div className={styles.about__img}>
            <Image src='/portrait.jpeg' alt='Daria Andreeva' width={350} height={500}/>
          </div>
          <div>
            <p className={styles.about__text}>Hello, my name is Andreeva Daria.</p>
            <p className={styles.about__text}>As a passionate Frontend Developer, I am driven to provide engaging user experiences and devising effective strategies to elevate business performance. Strong in an assortment of technologies, including <span>HTML, CSS, JavaScript, React, NextJS.</span> Able to effectively self-manage during independent projects, as well as collaborate in a team setting.</p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;