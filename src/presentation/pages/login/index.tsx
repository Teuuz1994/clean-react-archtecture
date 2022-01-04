import { useState } from 'react';

import {
  LoginHeader,
  Footer,
  Input,
  FormStatus,
} from '@/presentation/components';
import Context from '@/presentation/contexts/form';
import styles from './style.scss';

type State = {
  isLoading: boolean;
  errorMessage: string;
};

const Login = () => {
  const [state] = useState<State>({
    isLoading: false,
    errorMessage: '',
  });

  return (
    <div className={styles.login}>
      <LoginHeader />
      <Context.Provider value={state}>
        <form className={styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Digite seu e-mail" />
          <Input
            type="password"
            name="password"
            placeholder="Digite sua senha"
          />
          <button
            data-testid="submit"
            className={styles.submit}
            type="submit"
            disabled
          >
            Entrar
          </button>
          <span className={styles.link}>Criar conta</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  );
};

export default Login;
