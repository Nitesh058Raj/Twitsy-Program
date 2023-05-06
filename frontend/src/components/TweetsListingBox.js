import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TweetComponent from './TweetComponent';
import axios from 'axios';

const TweetsListingBox = () => {
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    getAllTweets();
  }, []);

  const getAllTweets = () => {
    axios.get("http://localhost:5000/alltweets")
      .then((r) => {
        console.log("Response length:", r.data.tweets.length);
        setAllTweets(r.data.tweets);
      }).catch((err) => {
        console.log("Error while fetching all tweets:" ,err);
      })
  };

  return (
    <Box sx={{
      overflowY: 'scroll',
      padding: '20px 5px', maxHeight: '86vh'
    }}>
      {allTweets.map((item, key) => {
        return (
          <TweetComponent details={item} key={key} />
        )
      })}
    </Box>
  )
}

export default TweetsListingBox;
