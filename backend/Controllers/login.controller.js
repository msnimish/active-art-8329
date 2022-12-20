const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { UserModel } = require("../Models/user.model");

const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    var user = await UserModel.find({ email });
    if (user.length > 0) {
      const user_hasedPassword = user[0].password;
      bcrypt.compare(password, user_hasedPassword, (err, equal) => {
        if (equal) {
          const jwt_token = jwt.sign({ userID: user[0]._id }, "secretkey");

          res.send({ smg: "Login Successfull", token: jwt_token });
        } else {
          res.send({ smg: "Password wrong please try again" });
        }
      });
    }
  } catch (error) {
    console.log(error);
    console.log("Somthing Wrong in SignIn");
  }
};

module.exports = logIn;
