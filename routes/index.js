var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "/api/nothing", data: "Hello World!" });
});
/* to api. */

// authApi
const authApi = require("./auth.api");
router.use("/auth", authApi);

//userApi
const userApi = require("./user.api");
router.use("/user", userApi);

//courseApi
const courseApi = require("./course.api");
router.use("/course", courseApi);

//unitApi
const unitApi = require("./unit.api");
router.use("/unit", unitApi);

module.exports = router;
