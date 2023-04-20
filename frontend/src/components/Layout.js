import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftDrawer from './LeftDrawer';
import RightDrawer from './RightDrawer';
import { Box } from '@mui/material';
import { CONSTANTS } from '../constants/sizes';

const Layout = () => {
  return (
    <>
      <LeftDrawer />
      <Box sx={{
        ml: `${CONSTANTS.left_drawer_width}px`,
        mr: `${CONSTANTS.right_drawer_width}px`
      }}>
        <Outlet /> {/* Routing based components will be displayed here. */}
      </Box>
      <RightDrawer />
    </>
  )
}

export default Layout;
