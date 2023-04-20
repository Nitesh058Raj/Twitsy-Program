import React from 'react';
import { Divider, Drawer } from '@mui/material';
import { COLORS } from '../constants/colors';
import { CONSTANTS } from '../constants/sizes';
import ProfileBox from './ProfileBox';
import ApplicationSettings from './ApplicationSettings';

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
        <ApplicationSettings />
        <Divider />
        <ProfileBox />
        <Divider />
      </Drawer>
  )
}

export default RightDrawer;
