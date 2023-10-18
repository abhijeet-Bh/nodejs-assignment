const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  return jwt.sign({ id: user.userid }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

module.exports = { generateToken };
