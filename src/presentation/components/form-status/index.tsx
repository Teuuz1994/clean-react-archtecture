import { useContext } from 'react';

import { Spinner } from '..';
import Context from '@/presentation/contexts/form';
import styles from './styles.scss';

const FormStatus = () => {
  const { state } = useContext(Context);
  const { isLoading, mainError } = state;

  return (
    <div data-testid="error-wrapp" className={styles.errorWrapp}>
      {isLoading && <Spinner className={styles.spinner} />}
      {mainError && <span className={styles.error}>{mainError}</span>}
    </div>
  );
};

export default FormStatus;
