import { memo } from 'react';

import { Logo } from '..';

import styles from './styles.scss';

export const LoginHeader = memo(() => (
  <header className={styles.header}>
    <Logo />
    <h1>4Dev - Enquetes para Programadores</h1>
  </header>
));
