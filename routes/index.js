var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ status: "ok", data: "Hello World!" });
});
/* GET api page. */
router.get("/api", function (req, res, next) {
  res.send({ status: "Api ok", data: "API work" });
});

module.exports = router;
