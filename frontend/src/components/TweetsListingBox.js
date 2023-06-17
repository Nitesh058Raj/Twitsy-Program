import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import TweetComponent from './TweetComponent';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import setUser from '../redux/currentUser/currentUserAction';

const TweetsListingBox = (props) => {
  const [allTweets, setAllTweets] = useState([]);
  const [myTweets, setMyTweets] = useState([]);
  const dispatch = useDispatch();

  const getAllTweets = () => {
    const HOST = process.env.REACT_APP_BE_HOST || "localhost";
    axios.get(`http://${HOST}:5000/alltweets`)
      .then((r) => {
        if (r.data.status === 502 || r.data.status === 204) {
          console.log(r.data.message);
        } else if (r.data.status === 200) {
          console.log("Response length:", r.data.tweets.length);
          setAllTweets(r.data.tweets);
        }
      }).catch((err) => {
        console.log("Error while fetching all tweets:", err);
      })
  };

  const getMyTweets = () => {
    const HOST = process.env.REACT_APP_BE_HOST || "localhost";
    axios.post(`http://${HOST}:5000/mytweets`, {
      useremail: currentUser[1]
    })
      .then((r) => {
        if (r.data.status === 502 || r.data.status === 204) {
          console.log(r.data.message);
        } else if (r.data.status === 200) {
          console.log("Response length:", r.data.tweets.length);
          setMyTweets(r.data.tweets);
        }
      }).catch((err) => {
        console.log("Error while fetching all tweets:", err);
      })
  };

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (userInfo) {
      dispatch(setUser([
        userInfo.name,
        userInfo.email
      ]));
    };


    if (props.isHomePage) {
      getAllTweets();
    } else {
      getMyTweets();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, props.isHomePage]);

  const currentUser = useSelector(
    (state) => state.userReducer.userInfo
  );

  return (
    <Box sx={{
      overflowY: 'scroll',
      padding: '20px 5px', maxHeight: '86vh'
    }}>
      {props.isHomePage ? allTweets.map((item, key) => {
        return (
          <TweetComponent details={item} key={key} />
        )
      }) :
        myTweets.map((item, key) => {
          return (
            <TweetComponent details={item} key={key} />
          )
        })
      }
    </Box>
  )
}

export default TweetsListingBox;
