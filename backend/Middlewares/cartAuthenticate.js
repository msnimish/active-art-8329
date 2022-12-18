const jwt = require("jsonwebtoken");

const cartAuthenticate = (req, res, next) => {
  try {
    if (req.method == "POST") {
      const decode = jwt.verify(token, "secretkey");
      const userID = decode.userID;
      req.body.userID = userID;
      next();
    }
  } catch (error) {
    console.log(error);
    console.log("somthing wrong in cartAuthentication");
  }
};

module.exports = cartAuthenticate;
