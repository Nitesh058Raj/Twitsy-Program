import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";

export const getTweets = (req, res) => {
  logger.info(`${req.method}: ${req.originalUrl} | Tweet get request`);

  database.query(QUERY.TWEET.SELECT_ALL, (error, results) => {
    if (results.length === 0) {
      res.send({
        status: HttpStatus.NO_CONTENT.code,
        message: "No tweets found",
      });
      logger.info(`${req.method}: ${req.originalUrl} | No tweets`);
    } else if (error) {
      res.send({
        status: HttpStatus.INTERNAL_SERVER_ERROR.code,
        message: `Server side error: ${error}`,
      });
    } else {
      res.send({
        status: HttpStatus.OK.code,
        message: "Tweets retrieved successfully",
        tweets: results,
      });
      logger.info(`${req.method}: ${req.originalUrl} | Tweet get success`);
    }
  });
};

// TODO: Below method is not in use. Hence, will be removed in next version.
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
  logger.info(`${req.method}: ${req.originalUrl} | Tweet get request [self]`);

  const { useremail } = req.body;
  if (!useremail) {
    res.send({
      status: HttpStatus.FIELD_ERROR.code,
      message: "Please provide all fields."
    });
    logger.info(`${req.method}: ${req.originalUrl} | Tweet get failure [X]`);
  } else {
    database.query(
      QUERY.TWEET.SELECT_WITH_EMAIL,
      useremail,
      (error, results) => {
        if (results.length === 0) {
          res.send({
            status: HttpStatus.NO_CONTENT.code,
            message: "No tweets found",
          });
          logger.info(`${req.method}: ${req.originalUrl} | No tweets`);
        } else if (error) {
          res.send({
            status: HttpStatus.INTERNAL_SERVER_ERROR.code,
            message: `Server side error: ${error}`,
          });
        } else {
          res.send({
            status: HttpStatus.OK.code,
            message: "Tweets retrieved successfully",
            tweets: results,
          });
          logger.info(`${req.method}: ${req.originalUrl} | Tweet get success [self]`);
        }
      }
    );
  }
};

// TODO: Below method is not in use. Hence, will be removed in next version.
export const createTweet = (req, res) => {
  logger.info(`${req.method}: ${req.originalUrl} | Tweet create request`);

  database.query(
    QUERY.TWEET.CREATE,
    Object.values(req.body),
    (error, results) => {
      console.log(error);
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
  logger.info(`${req.method}: ${req.originalUrl} | Tweet create request`);

  console.log(Object.values(req.body));
  const { useremail, content } = req.body;
  if (!useremail || !content) {
    res.send({
      status: HttpStatus.FIELD_ERROR.code,
      message: "Please provide all fields."
    });
    logger.info(`${req.method}: ${req.originalUrl} | Tweet create failure [X]`);
  } else {
    database.query(QUERY.USER.CHECK_EMAIL, useremail, (error, results) => {
      if (error) {
        res.send({
          status: HttpStatus.INTERNAL_SERVER_ERROR.code,
          message: `Server side error: ${error}`,
        });
      } else if (results[0]["COUNT(*)"] == "0") {
        res.send({
          status: HttpStatus.FORBIDDEN.code,
          message: "Email does not exists",
        });
        logger.info(`${req.method}: ${req.originalUrl} | Tweet create failure [X]`);
      } else {
        database.query(
          QUERY.TWEET.CREATE_WITH_EMAIL,
          [content, useremail],
          (error, results) => {
            if (error) {
              res.send({
                status: HttpStatus.INTERNAL_SERVER_ERROR.code,
                message: `Server side error: ${error}`,
              });
            } else {
              console.log(results);
              res.send({
                status: HttpStatus.CREATED.code,
                message: "Tweet created successfully",
              });
              logger.info(`${req.method}: ${req.originalUrl} | Tweet create success`);
            }
          }
        );
      }
    });
  }
};
