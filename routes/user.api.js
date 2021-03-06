const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const validators = require("../middlewares/validators");
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/authentication");
// const authMiddleware = require("../middlewares/authentication");

//NO LOGIN REQUIRED
/**
 * @route POST api/users
 * @description Register new user
 * @access Public
 */
router.post(
  "/",
  validators.validate([
    body("name", "Invalid name").exists().notEmpty(),
    body("email", "Invalid email").exists().isEmail(),
    body("password", "Invalid password").exists().notEmpty(),
  ]),
  userController.register
);

//LOGIN REQUIRED
/**
 * @route get api/users/me
 * @description current user
 * @access login required
 */
router.get("/me", authMiddleware.loginRequired, userController.getCurrentUser);

/**
 * @route get api/users/courses
 * @description enrolled courses
 * @access login required
 */
router.get(
  "/courses",
  authMiddleware.loginRequired,
  userController.getEnrollCourses
);
/**
 * @route get api/users/courses
 * @description enrolled courses
 * @access login required
 */
router.get("/", authMiddleware.loginRequired, userController.getAllUsers);

module.exports = router;
