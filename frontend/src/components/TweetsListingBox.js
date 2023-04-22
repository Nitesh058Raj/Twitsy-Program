import React from 'react';
import { Box } from '@mui/material';
import TweetComponent from './TweetComponent';

const TweetsListingBox = () => {
  // TODO: Fetch tweets from backend
  const tweetsFromBackend = [
    {
      tweetBy: {
        name: 'Vinay Gupta',
        email: 'vinay@gupta.com',
        avatarUrl: ''
      },
      tweetContent: 'Hi! How are you all? \nMaterial UI is an open-source React component library'
    },
    {
      tweetBy: {
        name: 'Nitesh Raj',
        email: 'nitesh@raj.com',
        avatarUrl: ''
      },
      tweetContent: 'Oh hi! We are good :) \nMaterial UI is beautiful by design and features a suite of customization options'
    }
  ];


  return (
    <Box sx={{
      overflowY: 'scroll',
      padding: '20px 5px', maxHeight: '86vh'
    }}>
      {tweetsFromBackend.map((item, key) => {
        return (
          <TweetComponent details={item} key={key} />
        )
      })}
    </Box>
  )
}

export default TweetsListingBox;
