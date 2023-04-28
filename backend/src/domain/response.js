class Response {
  constructor(statusCode, httpStatus, message, data) {
    this.timeStamp = new Date().toLocaleString();
    this.statusCode = statusCode;
    this.httpStatus = httpStatus;
    this.message = message;
    this.result = data;
  }
}

export default Response;
