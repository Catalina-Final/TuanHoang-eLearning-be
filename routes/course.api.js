const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const authMiddleware = require("../middlewares/authentication");
const { body } = require("express-validator");
// const authMiddleware = require("../middlewares/authentication");

//NO LOGIN REQUIRED

//LOGIN REQUIRED
/**
 * @route POST api/course
 * @description Register new user
 * @access Public
 */
router.post("/", authMiddleware.loginRequired, courseController.createNew);

module.exports = router;
