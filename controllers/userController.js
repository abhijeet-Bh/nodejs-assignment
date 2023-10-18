const { generateToken } = require("../config/auth");
const {
  findUserByUsernameAndPassword,
} = require("../repositories/userRepository");

class UserController {
  async logInUser(req, res) {
    const { username, password } = req.body;
    const user = await findUserByUsernameAndPassword(username, password);
    const token = generateToken(user);
    res.json({ accesstoken: token });
  }
}

module.exports = UserController;
