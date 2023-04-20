import React from 'react';
import { Drawer } from '@mui/material';
import { COLORS } from '../constants/colors';
import { CONSTANTS } from '../constants/sizes';
import ProfileBox from './ProfileBox';

const RightDrawer = () => {
  return (
    <Drawer
        anchor="right"
        variant="permanent"
        elevation={20}
        sx={{
          opacity: 1,
          width: CONSTANTS.right_drawer_width,
          flexShrink: 0,
          boxSizing: 'border-box',
          '& .MuiDrawer-paper': {
            width: CONSTANTS.right_drawer_width,
            backgroundColor: COLORS.background_dark,
          },
        }}
      >
        <ProfileBox />
      </Drawer>
  )
}

export default RightDrawer;
