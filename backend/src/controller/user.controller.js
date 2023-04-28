import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";

export const createUser = (req, res) => {
  logger.info(`${req.method} : ${req.originalUrl} , Creating User...`);

  database.query(
    QUERY.USER.CREATE,
    Object.values(req.body),
    (error, results) => {
      if (error) {
        if (error.code == "ER_DUP_ENTRY") {
          res.send({
            status: HttpStatus.CONFLICT.code,
            message: "Email Id already exists",
          });
        } else {
          res.send({
            status: HttpStatus.INTERNAL_SERVER_ERROR.code,
            message: "There is an Error",
          });
        }
      } else {
        res.send({
          status: HttpStatus.CREATED.code,
          message: "User Created",
        });
      }
    }
  );
};

export const userLogIn = (req, res) => {
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
        QUERY.USER.CHECK_PASSWORD,
        req.body.email,
        (error, results) => {
          if (error) {
            res.send({
              status: HttpStatus.INTERNAL_SERVER_ERROR.code,
              message: "There is an error",
            });
          } else if (results[0]["password"] === req.body.password) {
            res.send({
              status: HttpStatus.OK.code,
              message: "Welcome",
            });
          } else {
            res.send({
              status: HttpStatus.FORBIDDEN.code,
              message: "Password does not match",
            });
          }
        }
      );
    }
  });
};
