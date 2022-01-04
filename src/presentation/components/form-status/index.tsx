import { useContext } from 'react';

import { Spinner } from '..';
import Context from '@/presentation/contexts/form';
import styles from './styles.scss';

const FormStatus = () => {
  const { isLoading, errorMessage } = useContext(Context);

  return (
    <div data-testid="error-wrapp" className={styles.errorWrapp}>
      {isLoading && <Spinner className={styles.spinner} />}
      {errorMessage && <span className={styles.error}>{errorMessage}</span>}
    </div>
  );
};

export default FormStatus;
