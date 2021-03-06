import { HtmlHTMLAttributes } from 'react';
import styles from './styles.scss';

type Props = HtmlHTMLAttributes<HTMLSpanElement>;

const Spinner = ({ className, ...rest }: Props) => {
  return (
    <div className={[styles.spinner, className].join(' ')} {...rest}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Spinner;
