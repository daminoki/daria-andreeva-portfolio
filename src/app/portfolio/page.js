import styles from './page.module.scss';
import Container from '@/components/ui/Container';
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import Image from 'next/image';
import Markdown from 'react-markdown';

const client = createClient({
  projectId: 'r24w0ip6',
  dataset: 'production',
  apiVersion: '2022-03-25',
  useCdn: false
});
export async function getData() {
  const projects = await client.fetch('*[_type == "project"]');

  return projects;
}

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
export default async function Portfolio() {
  const projects = await getData();

  return <div className={styles.portfolio}>
    <Container>
      <h1 className={styles.portfolio__title}>Portfolio</h1>

      {projects.length > 0 && (
        <ul className={styles.portfolio__list}>
          {projects.map((project) => (
            <li className={styles.project} key={project._id}>
              <a className={styles.project__container} href={project.link} target='_blank'>
                <div className={styles.project__image}>
                  <Image src={urlFor(project.image).url()} alt={project.title} width={600} height={400} />
                </div>

                <div className={styles.project__content}>
                  <h4 className={styles.project__title}>{project.title}</h4>

                  <Markdown className={styles.project__description}>{project.description}</Markdown>

                  <ul className={styles.project__tags}>
                    {project.tags.map((tag) => (
                      <li className={styles.project__tag} key={tag}>
                        <div className={styles.back}></div>
                        <div className={styles.main}></div>
                        <div className={styles.front}></div>
                        <span>{tag}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}

      {!projects.length > 0 && <p>No projects to show</p>}
    </Container>
  </div>;
}