import express from 'express';
import { createTweet, getTweet, getTweets } from '../controller/tweet.controller.js';
import { createUser } from '../controller/user.controller.js';

const Router = express.Router();

Router.route('/tweet')
    .post(createTweet)
    .get(getTweets);

Router.route('/tweet/:id')
    .get(getTweet);

Router.route('/user')
    .post(createUser);

export default Router;