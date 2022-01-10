import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  FocusEvent,
  useContext,
} from 'react';

import Context from '@/presentation/contexts/form';
import styles from './styles.scss';

type Props = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input = ({ name, ...rest }: Props) => {
  const value = useContext(Context);
  const error = value[`${name}Error`];
  const enableEdit = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const getStatus = (): string => {
    return '⛔';
  };

  const getTitle = (): string => {
    return error;
  };

  return (
    <div className={styles.inputWrapp}>
      <input {...rest} readOnly onFocus={enableEdit} />
      <span
        data-testid={`${name}-status`}
        title={getTitle()}
        className={styles.status}
      >
        {getStatus()}
      </span>
    </div>
  );
};

export default Input;
