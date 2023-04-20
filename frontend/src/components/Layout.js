import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';

const Layout = () => {
  return (
    <>
      <LeftDrawer />
      <Outlet /> {/* Routing based components will be displayed here. */}
      <RightDrawer />
    </>
  )
}

export default Layout;
