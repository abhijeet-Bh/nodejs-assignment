const db = require("../config/db");

const createUser = (user) => {
  return new Promise((resolve, reject) => {
    db.query("INSERT INTO users SET ?", user, (error, results, fields) => {
      if (error) {
        return reject(error);
      }
      resolve({ id: results.insertId, ...user });
    });
  });
};

const findUserByUsernameAndPassword = async (username, password) => {
  const rows = await db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  return rows[0];
};

module.exports = { createUser, findUserByUsernameAndPassword };
