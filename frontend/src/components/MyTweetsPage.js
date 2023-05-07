import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import TweetsListingBox from './TweetsListingBox';

const MyTweetsPage = () => {
    return (
        <Box sx={{ padding: '10px 15px' }}>
            <Typography sx={{ fontSize: 32 }}># My Tweets</Typography>
            <Divider />
            <TweetsListingBox pageName={"mytweets"} />
        </Box>
    )
}

export default MyTweetsPage;