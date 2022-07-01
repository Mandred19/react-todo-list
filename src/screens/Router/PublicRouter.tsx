import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Authorization from '../Authorization';

const PublicRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={'sign-up'} element={<Authorization />} />
      <Route path={'sign-in'} element={<Authorization />} />
      <Route path="*" element={<Navigate to={'sign-in'} replace={true} />} />
    </Routes>
  );
};

export default PublicRouter;