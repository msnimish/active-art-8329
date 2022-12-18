// Authenticate
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  const token = req.headers?.Authorization.split(" ")[1];
  if (token) {
    const decode = jwt.verify(token, "secretkey");
    if (decode) {
      const userID = decode.userID;
      req.body.userID = userID;
      next();
    } else {
      res.send("Please Login Again");
    }
  } else {
    res.send("Please Login Again");
  }
};

module.exports = authenticate;
