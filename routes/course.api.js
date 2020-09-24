const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course.controller");
const authMiddleware = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");

//NO LOGIN REQUIRED

/**
 * @route GET api/courses?page=1&limit=10
 * @description Get courses with pagination
 * @access Public
 */

router.get("/", courseController.getAllCourses);

/**
 * @route GET api/course/:id
 * @description Get a single course
 * @access Public
 */
router.get(
  "/:id",
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.getSingleCourse
);

//LOGIN REQUIRED

/**
 * @route POST api/course
 * @description create new course
 * @access Login required
 */
router.post("/", authMiddleware.loginRequired, courseController.createNew);

/**
 * @route PUT api/course/:id
 * @description Update a course
 * @access Login required
 */
router.put(
  "/:id",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
    body("title", "Missing title").exists().notEmpty(),
    body("description", "Missing description").exists().notEmpty(),
    // body("image", "Missing image").exists().notEmpty(),
  ]),
  courseController.updateSingleCourse
);

/**
 * @route POST api/course/:id/enroll
 * @description user enroll a course as a student
 * @access Login required
 */
router.post(
  "/:id/enroll",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.enrollCourse
);
/**
 * @route POST api/course/:id/enroll
 * @description user enroll a course as a student
 * @access Login required
 */
router.post(
  "/:courseId/teacher/:teacherId",
  authMiddleware.loginRequired,
  authMiddleware.isAdmin,
  validators.validate([
    param("courseId").exists().isString().custom(validators.checkObjectId),
    param("teacherId").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.assignTeacher
);
/**
 * @route DELETE /:courseId/teacher/:teacherId
 * @description user enroll a course as a student
 * @access Login required
 */
router.delete(
  "/teaching/unassign/:teachingId",
  authMiddleware.loginRequired,
  authMiddleware.isAdmin,
  validators.validate([
    param("teachingId").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.unassignTeacher
);

/**
 * @route GET api/course/:id/enroll
 * @description Get relationship between user and course
 * @access Login required
 */
router.get(
  "/:id/enroll",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.getEnrollment
);
// unassignTeacher;
/**
 * @route DELETE api/course/:id
 * @description Delete a course
 * @access login required
 */
router.delete(
  "/:id",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  courseController.deleteSingleCourse
);

module.exports = router;
