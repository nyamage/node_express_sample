var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("ejs_sample", { title: "Express", flag: true });
});

module.exports = router;
