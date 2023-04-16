import React from 'react';
import { Drawer, Toolbar } from '@mui/material';
import { COLORS } from '../constants/colors';
import { CONSTANTS } from '../constants/sizes';
import AppLogo from "../assets/AppLogo.png";

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
      >
        <Toolbar sx={{ mt: '5vh', mb: '10vh' }}>
            <img 
                src={AppLogo} alt="Logo" height={50} 
                style={{ cursor: 'pointer'}} 
                onClick={()=>{}}
            />
        </Toolbar>
      </Drawer>
  )
}

export default LeftDrawer;
