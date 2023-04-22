import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import TweetsListingBox from './TweetsListingBox';

const TweetsHomePage = () => {
    return (
        <Box sx={{ padding: '10px 15px' }}>
            <Typography sx={{ fontSize: 32 }}># Home</Typography>
            <Divider />
            <TweetsListingBox />
        </Box>
    )
}

export default TweetsHomePage;
