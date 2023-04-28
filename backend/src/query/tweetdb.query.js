const QUERY = {
  USER: {
    SELECT_ALL: "SELECT * FROM Users",
    SELECT: "SELECT * FROM Users WHERE user_id = ?",
    CREATE: "INSERT INTO Users(name, email, password) VALUES(?,?,?)",
    DELETE: "DELETE FROM Users WHERE user_id = ?",
    CHECK_EMAIL: "SELECT COUNT(*) FROM Users WHERE email = ?;", // result == "0" --> false
    CHECK_PASSWORD: "SELECT * FROM Users WHERE email =?",
  },
  TWEET: {
    SELECT_ALL: "SELECT * FROM Tweets",
    SELECT: "SELECT * FROM Tweets WHERE tweet_id = ?",
    CREATE: "INSERT INTO Tweets(user_id, content) VALUES(?,?)",
    UPDATE: "UPDATE Tweets SET content = ? WHERE tweet_id= ?",
    DELETE: "DELETE FROM Tweets WHERE tweet_id = ?",
    CREATE_WITH_EMAIL:
      "INSERT INTO Tweets (user_id, content) SELECT u.user_id, ? FROM Users u WHERE u.email = ?;",
    SELECT_WITH_EMAIL:
      "SELECT t.content, t.created_at from Tweets t JOIN Users u ON t.user_id = u.user_id WHERE u.email = ?;",
  },
};

export default QUERY;
