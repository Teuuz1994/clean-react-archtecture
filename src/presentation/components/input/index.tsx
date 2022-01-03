import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

import styles from './styles.scss';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const Input = (props: Props) => {
  return (
    <div className={styles.inputWrapp}>
      <input {...props} />
      <span className={styles.status}>⛔</span>
    </div>
  );
};
