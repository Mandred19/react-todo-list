import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppContent from '../AppContent';
// import SignIn from '../Authorization/SignIn';
// import SignUp from '../Authorization/SignUp';

const Router: FC = (): ReactElement => {
  return (
    <Routes>
      {/* TODO delete - если пользователь авторизован */}
      <Route path={'list'} element={<AppContent />}></Route>
      {/*<Route path={'list/:id'} element={}></Route>*/}
      {/*<Route path={'personal-area'} element={}></Route>*/}
      <Route path="*" element={<Navigate to={'list'} replace={true} />} />

      {/* TODO delete - если пользователь не авторизован */}
      {/*<Route path={'sign up'} element={<SignUp />}></Route>*/}
      {/*<Route path={'sign-in'} element={<SignIn />}></Route>*/}
      {/*<Route path="*" element={<<Navigate to={'sign-in'} replace={true} />} />*/}
    </Routes>
  );
};

export default Router;