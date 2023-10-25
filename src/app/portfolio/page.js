import styles from './page.module.scss';
import Container from '@/components/ui/Container';
import { createClient } from 'next-sanity';

export default async function Portfolio() {
  const projects = await getData();

  return <div className={styles.portfolio}>
    <Container>
      <h1 className={styles.portfolio__title}>Portfolio</h1>
      {projects.length > 0 && (
        <ul>
          {projects.map((project) => (
            <li key={project._id}>{project?.title}</li>
          ))}
        </ul>
      )}
      {!projects.length > 0 && <p>No projects to show</p>}
    </Container>
  </div>;
}

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