import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import ip from "ip";

import HttpStatus from "./domain/httpStatus.js";
import Response from "./domain/response.js";
import Router from "./route/route.config.js";
import logger from "./util/logger.js";

dotenv.config();
const PORT = process.env.SERVER_PORT || 3000;

//calling express function
const app = express();

//adding middleware for cors
app.use(cors({ origin: "*" }));
app.use(express.json());

// calling Router from route.config.js
app.use(Router);

app.get("/", (req, res) => {
  res.send(
    new Response(HttpStatus.OK.code, HttpStatus.OK.status, "Message: Works Fine")
  );
});
app.get("*", (req, res) => {
  res
    .status(HttpStatus.NOT_FOUND.code)
    .send(
      new Response(
        HttpStatus.NOT_FOUND.code,
        HttpStatus.NOT_FOUND.status,
        `${req.originalUrl} route doesn't exist`
      )
    );
});
// process.env -->  works like Ansible facts
app.listen(PORT, () =>
  logger.info(`Server is running on : ${ip.address()} : ${PORT}`)
);
