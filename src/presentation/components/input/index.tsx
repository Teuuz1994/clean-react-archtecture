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
  const { state, setState } = useContext(Context);

  const error = state[`${name}Error`];

  const enableEdit = (event: FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false;
  };

  const handleChange = (event: FocusEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const getStatus = (): string => {
    return error ? '⛔' : '✅';
  };

  const getTitle = (): string => {
    return error || 'Tudo certo!';
  };

  return (
    <div className={styles.inputWrapp}>
      <input
        {...rest}
        data-testid={name}
        readOnly
        onFocus={enableEdit}
        onChange={handleChange}
      />
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
