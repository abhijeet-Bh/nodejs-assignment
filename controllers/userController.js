const { generateToken } = require("../config/auth");
const User = require("../models/userModel");
const { v1: uuid } = require("uuid");
const {
  findUserByUsernameAndPassword,
  createUser,
} = require("../repositories/userRepository");

class UserController {
  async logInUser(req, res) {
    const { username, password } = req.body;
    const user = await findUserByUsernameAndPassword(username, password);
    if (user) {
      const token = generateToken(user);
      res.json(200, { accesstoken: token });
    } else {
      res.json(404, { message: "Invalid User credentials!" });
    }
  }

  async signupUser(req, res) {
    const { username, firstname, lastname, email, password } = req.body;
    const newUser = new User(
      uuid(),
      username,
      firstname,
      lastname,
      email,
      password
    );
    const user = await createUser(newUser);
    res.json(user);
  }
}

module.exports = UserController;
