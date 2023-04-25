import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import Response from "../domain/response.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";

export const getTweets = (req, res) => {
  logger.info(`${req.method}:${req.originalUrl}, Getting the tweet...`);
  database.query(QUERY.TWEET.SELECT_ALL, (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No tweet found"
          )
        );
    } else {
      res.status(HttpStatus.OK.code).send(
        new Response(
          HttpStatus.OK.code,
          HttpStatus.OK.status,
          "Tweet:",
          {
            tweet: results,
          }
        )
      );
    }
  });
};

export const getTweet = (req, res) => {
  logger.info(`${req.method}:${req.originalUrl}, Getting the tweet...`);
  database.query(QUERY.TWEET.SELECT, [req.params.id], (error, results) => {
    if (!results) {
      res
        .status(HttpStatus.OK.code)
        .send(
          new Response(
            HttpStatus.OK.code,
            HttpStatus.OK.status,
            "No tweet found"
          )
        );
    } else {
      res.status(HttpStatus.OK.code).send(
        new Response(
          HttpStatus.OK.code,
          HttpStatus.OK.status,
          "Tweets: ",
          {
            tweets: results,
          }
        )
      );
    }
  });
};

export const createTweet = (req, res) => {
  logger.info(`${req.method} : ${req.originalUrl} , creating tweet...`);

  database.query(QUERY.TWEET.CREATE, Object.values(req.body), (error, results) => {
    if (error) {
      res
        .status(HttpStatus.INTERNAL_SERVER_ERROR.code)
        .send(
          new Response(
            HttpStatus.INTERNAL_SERVER_ERROR.code,
            HttpStatus.INTERNAL_SERVER_ERROR.status,
            "Server Problem",
            { error: error }
          )
        );
    } else {
      res
        .status(HttpStatus.CREATED.code)
        .send(
          new Response(
            HttpStatus.CREATED.code,
            HttpStatus.CREATED.status,
            "tweet Created",
            { query_info: results }
          )
        );
    }
  });
};
