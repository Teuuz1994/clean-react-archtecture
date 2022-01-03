import { DetailedHTMLProps, InputHTMLAttributes, FocusEvent } from 'react';

import styles from './styles.scss';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = (props: Props) => {
  const enableEdit = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  return (
    <div className={styles.inputWrapp}>
      <input {...props} readOnly onFocus={enableEdit} />
      <span className={styles.status}>⛔</span>
    </div>
  );
};

export default Input;
