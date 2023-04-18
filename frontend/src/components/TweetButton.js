import React from 'react';
import { styled, Button, Box } from "@mui/material";
import { COLORS } from "../constants/colors";

const TweetButton = () => {
    const CustomTweetButton = styled(Button)(({ theme }) => ({
        fontSize: 25,
        textTransform: 'none',
        color: theme.palette.getContrastText(COLORS.primary),
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        padding: '5px 30px',
        '&:hover': {
            backgroundColor: COLORS.primary_hover,
        },
    }));
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <CustomTweetButton
                variant="contained"
                onClick={() => { }}
            >Tweet</CustomTweetButton>
        </Box>
    )
}

export default TweetButton;