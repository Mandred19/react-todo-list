import React, { FC, ReactElement } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import AppContent from '../AppContent';
import AppCard from '../AppCard';
import UserInfo from '../UserInfo';

const ProtectedRouter: FC = (): ReactElement => {
  return (
    <Routes>
      <Route path={'list'} element={<AppContent />} />
      <Route path={'list/:id'} element={<AppCard />} />
      <Route path={'user-info'} element={UserInfo} />
      <Route path="*" element={<Navigate to={'list'} replace={true} />} />
    </Routes>
  );
};

export default ProtectedRouter;