var express = require("express");
var router = express.Router();
var os = require("os");

var loads = [];
var mems = [];
setInterval(() => {
  loads.push([loads.length].concat(os.loadavg()));
  mems.push([mems.length].concat(os.freemem()));
  console.log(os.totalmem());
}, 5 * 1000);
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    loads: JSON.stringify(loads),
    mems: JSON.stringify(mems),
    totalMem: os.totalmem()
  });
});

module.exports = router;
