import React from 'react';

import { AppRoutes } from './AppRoute';
import Header from './Header';
import SideNav from './SideNav';

const Layout = () => {
  return (
    <div>
      <Header />
      <SideNav />

      <main>
        <AppRoutes />
      </main>
    </div>
  );
};

export default Layout;
