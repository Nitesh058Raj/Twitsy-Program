import React from 'react';
import { Drawer } from '@mui/material';
import { COLORS } from '../constants/colors';
import { CONSTANTS } from '../constants/sizes';

const LeftDrawer = () => {
  return (
    <Drawer
        anchor="left"
        variant="permanent"
        elevation={20}
        sx={{
          opacity: 1,
          width: CONSTANTS.left_drawer_width,
          flexShrink: 0,
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: CONSTANTS.left_drawer_width,
            backgroundColor: COLORS.background_dark,
          },
        }}
      ></Drawer>
  )
}

export default LeftDrawer;
