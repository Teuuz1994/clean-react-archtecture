import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '@/presentation/pages';
import { ValidationStub } from '@/presentation/test/mock-validation';

import '../../styles/global.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={<Login validation={new ValidationStub()} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
