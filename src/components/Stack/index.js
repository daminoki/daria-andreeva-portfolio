import Marquee from 'react-fast-marquee';
import Container from '../ui/Container';
import styles from './Stack.module.scss';

const Stack = () => {
  return (
    <div className={styles.stack}>
      <Container>
        <h2 className={styles.stack__title}>My stack</h2>
      </Container>
      <div className={styles.stack__list}>
        <div className={styles.stack__marquee}>
          <Marquee speed={30} pauseOnHover={true} autoFill={true}>
            <div className={styles.stack__marquee}>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>HTML5</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>CSS3</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>JS</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>React</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>NextJS</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>RTK</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>Webpack</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>Sass</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>Git</span>
              </div>
              <div className={styles.test}>
                <div className={styles.test__back}></div>
                <div className={styles.test__front}></div>
                <div className={styles.test__main}></div>
                <span className={styles.stack__item}>Figma</span>
              </div>
            </div>
          </Marquee>
        </div>

      </div>
    </div>
  );
};

export default Stack;