import React from 'react';
import { Avatar, Box, Divider, IconButton, Typography } from '@mui/material';
import { FavoriteBorder, Reply } from '@mui/icons-material';

const TweetComponent = (props) => {
    const tweetDetails = props.details;

    return (
        <Box sx={{
            mb: 3,
            boxShadow: '0 0 2px gray',
            borderRadius: 2,
        }}>
            <TweetHeader tweetBy={tweetDetails.tweetBy} />
            <Divider />
            <TweetContentArea tweetContent={tweetDetails.tweetContent} />
            <Divider />
            <TweetAction />
        </Box>
    )
}

export default TweetComponent;

const TweetHeader = (props) => {
    return (
        <Box sx={{ padding: '10px 20px', display: 'flex', alignItems: 'center', }}>
            <Avatar sx={{ width: 50, height: 50, }} />
            <Typography variant='h5' sx={{ pl: 2 }}>{props.tweetBy.name}</Typography>
        </Box>
    );
};

const TweetContentArea = (props) => {
    return (
        <Box sx={{ m: 2, ml: 3 }}>
            <Typography component="pre" sx={{ fontSize: 18 }}>
                {props.tweetContent}
            </Typography>
        </Box>
    );
};

const TweetAction = () => {
    return (
        <Box sx={{
            padding: '5px 20px', maxWidth: 100, display: 'flex',
            alignItems: 'center', justifyContent: 'space-between'
        }}>
            <IconButton>
                <FavoriteBorder />
            </IconButton>
            <IconButton>
                <Reply />
            </IconButton>
        </Box>
    );
};
