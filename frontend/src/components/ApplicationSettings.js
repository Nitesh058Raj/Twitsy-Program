import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, IconButton } from '@mui/material';
import { BrightnessHigh, BrightnessLow } from '@mui/icons-material';
import { setGlobalTheme } from "../redux/theme/themeAction"

const ApplicationSettings = () => {
    const dispatch = useDispatch();
    const globalTheme = useSelector(
        state => state.globalThemeReducer.globalTheme
    );

    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'right' }}>
            <IconButton sx={{ mr: 2 }}
                onClick={() => dispatch(setGlobalTheme(!globalTheme))}
            >
                {globalTheme ? <BrightnessLow /> : <BrightnessHigh />}
            </IconButton>
            <Button variant='outlined'>Log out</Button>
        </Box>
    )
}

export default ApplicationSettings;
