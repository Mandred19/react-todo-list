import React, {FC, ReactElement} from 'react';
import AppContentTableFooter from './AppContentTableFooter';
import AppContentTableList from './AppContentTableList';
import AppContentTableHeader from './AppContentTableHeader';

const AppContentTable: FC = (): ReactElement => {
  return (
    <>
      <AppContentTableHeader />

      <AppContentTableList />

      <AppContentTableFooter />
    </>
  );
};

// export default AppContentTable;
