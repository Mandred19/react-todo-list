import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

const PublicRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={'sign-up'} element={<SignUp />} />
      <Route path={'sign-in'} element={<SignIn />} />
      <Route path="*" element={<Navigate to={'sign-in'} replace={true} />} />
    </Routes>
  );
};

export default PublicRouter;