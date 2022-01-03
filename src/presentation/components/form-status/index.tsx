import { Spinner } from '..';

import styles from './styles.scss';

export const FormStatus = () => {
  return (
    <div className={styles.errorWrapp}>
      <Spinner className={styles.spinner} />
      <span className={styles.error}>Erro</span>
    </div>
  );
};
