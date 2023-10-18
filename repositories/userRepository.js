const db = require("../config/db");

const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return db.query("INSERT INTO users (username, password) VALUES (?, ?)", [
    username,
    hashedPassword,
  ]);
};

const findUserByUsernameAndPassword = async (username, password) => {
  const rows = await db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?",
    [username, password]
  );
  return rows[0];
};

module.exports = { createUser, findUserByUsernameAndPassword };
