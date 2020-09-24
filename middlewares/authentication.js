const jwt = require("jsonwebtoken");
require("dotenv").config;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const { AppError } = require("../src/helpers/utils.helper");
const authMiddleware = {};
// console.log("=======================", JWT_SECRET_KEY);
authMiddleware.loginRequired = (req, res, next) => {
  try {
    const tokenString = req.headers.authorization;
    if (!tokenString)
      return next(new AppError(401, "Token not found", "Validation Error"));
    const token = tokenString.replace("Bearer ", "");
    jwt.verify(token, JWT_SECRET_KEY, (err, payload) => {
      if (err) {
        if (err.name === "TokenExpiredError") {
          return next(new AppError(401, "Token expired", "Validation Error"));
        } else {
          return next(
            new AppError(401, "Token is invalid", "Validation Error")
          );
        }
      }
      // console.log(payload);
      req.userId = payload._id;
      req.userRole = payload.role;
    });
    next();
  } catch (error) {
    next(error);
  }
};

authMiddleware.isAdmin = (req, res, next) => {
  if (req.userRole === "admin") {
    next();
  } else {
    return next(new AppError(401, "Role Admin required", "Validation Error"));
  }
};

module.exports = authMiddleware;
