const express = require("express");
const router = express.Router();
const unitController = require("../controllers/unit.controller");
const authMiddleware = require("../middlewares/authentication");
const { body, param } = require("express-validator");
const validators = require("../middlewares/validators");

//LOGIN REQUIRED

/**
 * @route POST api/unit
 * @description create new unit
 * @access Login required
 */
router.post("/", authMiddleware.loginRequired, unitController.createNew);

/**
 * @route GET api/units?page=1&limit=10
 * @description Get blogs with pagination
 * @access login required
 */

router.get("/", authMiddleware.loginRequired, unitController.listUnits);

/**
 * @route GET api/unit/:id
 * @description Get a single unit
 * @access login required
 */
router.get(
  "/:id",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  unitController.getSingleUnit
);
/**
 * @route PUT api/unit/:id
 * @description Update a unit
 * @access Login required
 */
router.put(
  "/:id",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
    body("title", "Missing title").exists().notEmpty(),
    body("content", "Missing content").exists().notEmpty(),
  ]),
  unitController.updateSingleUnit
);
/**
 * @route DELETE api/unit/:id
 * @description Delete a unit
 * @access login required
 */
router.delete(
  "/:id",
  authMiddleware.loginRequired,
  validators.validate([
    param("id").exists().isString().custom(validators.checkObjectId),
  ]),
  unitController.deleteSingleUnit
);
module.exports = router;
