import express from "express";
import {
    createTweetWithEmail,
    getMyTweets,
    getTweet,
    getTweets,
} from "../controller/tweet.controller.js";
import { createUser, userLogIn } from "../controller/user.controller.js";

const Router = express.Router();

Router.route("/alltweets").get(getTweets);

Router.route("/mytweets").post(getMyTweets);

Router.route("/tweet/:id").get(getTweet);

Router.route("/dotweet").post(createTweetWithEmail);

Router.route("/register").post(createUser);

Router.route("/login").post(userLogIn);

export default Router;
