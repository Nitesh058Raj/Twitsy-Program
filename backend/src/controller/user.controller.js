import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";

export const createUser = (req, res) => {
  logger.info(`${req.method} : ${req.originalUrl} , Creating User...`);

  const { username, useremail, password } = req.body;
  if (!useremail || !username || !password) {
    res.send({
      status: HttpStatus.FIELD_ERROR.code,
      message: "Please provide all fields."
    })
  }
  else {
    database.query(
      QUERY.USER.CREATE,
      Object.values(req.body),
      (error, results) => {
        if (error) {
          if (error.code == "ER_DUP_ENTRY") {
            res.send({
              status: HttpStatus.CONFLICT.code,
              message: "Email already exists.",
            });
          } else {
            res.send({
              status: HttpStatus.INTERNAL_SERVER_ERROR.code,
              message: `Server side error: ${error}`,
            });
          }
        } else {
          res.send({
            status: HttpStatus.CREATED.code,
            message: "User created successfully.",
          });
        };
      }
    );
  }
};

export const userLogIn = (req, res) => {

  const { useremail, password } = req.body;
  if (!useremail || !password) {
    res.send({
      status: HttpStatus.FIELD_ERROR.code,
      message: "Please provide all fields."
    })
  }
  else {
    database.query(QUERY.USER.CHECK_EMAIL, useremail, (error, results) => {
      if (error) {
        res.send({
          status: HttpStatus.INTERNAL_SERVER_ERROR.code,
          message: `Server side error: ${error}`,
        });
      } else if (results[0]["COUNT(*)"] == 0) {
        res.send({
          status: HttpStatus.FORBIDDEN.code,
          message: "Email does not exists",
        });
      } else {
        database.query(
          QUERY.USER.CHECK_PASSWORD,
          useremail,
          (error, results) => {
            if (error) {
              res.send({
                status: HttpStatus.INTERNAL_SERVER_ERROR.code,
                message: `Server side error: ${error}`,
              });
            } else if (results[0]["password"] === password) {
              res.send({
                status: HttpStatus.OK.code,
                message: "Login successfully",
                user_details: results
              });
            } else {
              res.send({
                status: HttpStatus.FORBIDDEN.code,
                message: "Invalid Password",
              });
            }
          }
        );
      }
    })
  }
};