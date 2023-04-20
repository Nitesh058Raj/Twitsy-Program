import React from 'react';
import { Box, Button, IconButton } from '@mui/material';
import {LightMode} from '@mui/icons-material';

const ApplicationSettings = () => {
  return (
    <Box sx={{ p: 2, display: 'flex', justifyContent: 'right'}}>
        <IconButton>
            <LightMode />
        </IconButton>
        <Button variant='outlined'>Log out</Button>
    </Box>
  )
}

export default ApplicationSettings;
