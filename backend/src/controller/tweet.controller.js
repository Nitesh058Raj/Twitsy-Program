import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";

export const getTweets = (req, res) => {
  logger.info(`${req.method}:${req.originalUrl}, Getting the tweet...`);
  database.query(QUERY.TWEET.SELECT_ALL, (error, results) => {
    if (!results) {
      res.send({
        status: HttpStatus.NO_CONTENT.code,
        message: "No tweet found",
      });
    } else if (error) {
      res.send({
        status: HttpStatus.INTERNAL_SERVER_ERROR.code,
        message: "There is an Error",
      });
    } else {
      res.send({
        status: HttpStatus.OK.code,
        message: "Tweets found",
        tweets: results,
      });
    }
  });
};

export const getTweet = (req, res) => {
  logger.info(`${req.method}:${req.originalUrl}, Getting the tweet...`);
  database.query(QUERY.TWEET.SELECT, [req.params.id], (error, results) => {
    if (!results) {
      res.send({
        status: HttpStatus.NO_CONTENT.code,
        message: "No tweet found",
      });
    } else if (!results[0]) {
      res.send({
        status: HttpStatus.NO_CONTENT.code,
        message: "No tweet found",
      });
    } else {
      res.send({
        status: HttpStatus.OK.code,
        message: "Tweet found",
        tweet: results,
      });
    }
  });
};

export const getMyTweets = (req, res) => {
  logger.info(`${req.method}:${req.originalUrl}, Getting my tweets...`);
  database.query(
    QUERY.TWEET.SELECT_WITH_EMAIL,
    req.body.email,
    (error, results) => {
      if (!results) {
        res.send({
          status: HttpStatus.NO_CONTENT.code,
          message: "No tweet found",
        });
      } else if (error) {
        res.send({
          status: HttpStatus.INTERNAL_SERVER_ERROR.code,
          message: "There is an Error",
        });
      } else {
        res.send({
          status: HttpStatus.OK.code,
          message: "Tweets found",
          tweets: results,
        });
      }
    }
  );
};

export const createTweet = (req, res) => {
  logger.info(`${req.method} : ${req.originalUrl} , creating tweet...`);

  database.query(
    QUERY.TWEET.CREATE,
    Object.values(req.body),
    (error, results) => {
      if (error) {
        res.send({
          status: HttpStatus.INTERNAL_SERVER_ERROR.code,
          message: "There is an Error",
        });
      } else {
        res.send({
          status: HttpStatus.CREATED.code,
          message: "tweet Created",
        });
      }
    }
  );
};

export const createTweetWithEmail = (req, res) => {
  logger.info(`${req.method} : ${req.originalUrl} , creating tweet...`);

  // req.body = {content, email}
  database.query(QUERY.USER.CHECK_EMAIL, req.body.email, (error, results) => {
    if (error) {
      res.send({
        status: HttpStatus.INTERNAL_SERVER_ERROR.code,
        message: "There is an error",
      });
    } else if (results[0]["COUNT(*)"] == "0") {
      res.send({
        status: HttpStatus.FORBIDDEN.code,
        message: "Email does not exists",
      });
    } else {
      database.query(
        QUERY.TWEET.CREATE_WITH_EMAIL,
        Object.values(req.body),
        (error, results) => {
          if (error) {
            res.send({
              status: HttpStatus.INTERNAL_SERVER_ERROR.code,
              message: "There is an Error",
            });
          } else {
            res.send({
              status: HttpStatus.CREATED.code,
              message: "tweet Created",
            });
          }
        }
      );
    }
  });
};
