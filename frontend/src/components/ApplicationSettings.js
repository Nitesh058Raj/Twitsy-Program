import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, IconButton } from '@mui/material';
import { BrightnessHigh, BrightnessLow } from '@mui/icons-material';
import { setGlobalTheme } from "../redux/theme/themeAction";
import { useNavigate } from "react-router-dom";
import setUser from '../redux/currentUser/currentUserAction';

const ApplicationSettings = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const globalTheme = useSelector(
        state => state.globalThemeReducer.globalTheme
    );

    const logOut = () => {
        localStorage.removeItem("userInfo");
        dispatch(setUser(['', '']))
        navigate("/");
    }

    return (
        <Box sx={{ p: 2, display: 'flex', justifyContent: 'right' }}>
            <IconButton sx={{ mr: 2 }}
                onClick={() => dispatch(setGlobalTheme(!globalTheme))}
            >
                {globalTheme ? <BrightnessLow /> : <BrightnessHigh />}
            </IconButton>
            <Button onClick={logOut} variant='outlined'>Log out</Button>
        </Box>
    )
}

export default ApplicationSettings;
