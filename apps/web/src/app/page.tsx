import styles from './page.module.css';
import { shared } from '@nx/shared';
export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <h1>{shared()}</h1>
    </div>
  );
}
