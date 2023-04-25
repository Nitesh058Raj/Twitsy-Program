const QUERY = {

    USER: {
        SELECT_ALL: "SELECT * FROM Users",
        SELECT: "SELECT * FROM Users WHERE user_id = ?",
        CREATE: "INSERT INTO Users(name, email, password, image) VALUES(?,?,?,?)",
        DELETE: "DELETE FROM Users WHERE user_id = ?"
    },
    TWEET: {
        SELECT_ALL: "SELECT * FROM Tweets",
        SELECT: "SELECT * FROM Tweets WHERE tweet_id = ?",
        CREATE: "INSERT INTO Tweets(user_id, content, tweet_img) VALUES(?,?,?)",
        UPDATE: "UPDATE Tweets SET content = ?, tweet_img = ? WHERE tweet_id= ?",
        DELETE: "DELETE FROM Tweets WHERE tweet_id = ?"
    },
};

export default QUERY;
