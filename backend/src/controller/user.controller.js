import database from "../config/mysql.config.js";
import HttpStatus from "../domain/httpStatus.js";
import Response from "../domain/response.js";
import QUERY from "../query/tweetdb.query.js";
import logger from "../util/logger.js";


export const createUser = (req, res) => {
    logger.info(`${req.method} : ${req.originalUrl} , Creating User...`);
  
    database.query(QUERY.USER.CREATE, Object.values(req.body), (error, results) => {
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
              "User Created",
              { query_info: results }
            )
          );
      }
    });
  };
  