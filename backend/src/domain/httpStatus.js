const HttpStatus = {
  OK: { code: 200, status: "OK" },
  CREATED: { code: 201, status: "CREATED" },
  NO_CONTENT: { code: 204, status: "NO_CONTENT" },
  BAD_REQUEST: { code: 400, status: "BAD_REQUEST" },
  FORBIDDEN: { code: 403, status: "FORBIDDEN" },
  NOT_FOUND: { code: 404, status: "NOT_FOUND" },
  CONFLICT: { code: 409, status: "CONFICT" },
  INTERNAL_SERVER_ERROR: { code: 500, status: "INTERNAL_SERVER_ERROR" },
  FIELD_ERROR: { code: 502, status: "FIELD NOT SATISHFIED" },
  FIELD_EMPTY_ERROR: { code: 503, status: "FIELD CAN NOT BE EMPTY"}
};

export default HttpStatus;
