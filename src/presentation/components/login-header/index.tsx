import { memo } from 'react';

import { Logo } from '..';

import styles from './styles.scss';

const LoginHeader = () => (
  <header className={styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
);

export default memo(LoginHeader);
