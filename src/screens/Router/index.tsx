import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppContent from '../AppContent';
import AppCard from '../AppCard';
// import SignIn from '../Authorization/SignIn';
// import SignUp from '../Authorization/SignUp';

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      {/* TODO delete - если пользователь авторизован */}
      <Route path={'list'} element={<AppContent />} />
      <Route path={'list/:id'} element={<AppCard />} />
      {/*<Route path={'personal-area'} element={} />*/}
      <Route path="*" element={<Navigate to={'list'} replace={true} />} />

      {/* TODO delete - если пользователь не авторизован */}
      {/*<Route path={'sign up'} element={<SignUp />} />*/}
      {/*<Route path={'sign-in'} element={<SignIn />} />*/}
      {/*<Route path="*" element={<<Navigate to={'sign-in'} replace={true} />} />*/}
    </Routes>
  );
};

export default Router;