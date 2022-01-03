import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '@/presentation/pages';

import '../../styles/global.scss';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
