var express = require("express");
var router = express.Router();

// middleware
router.use((req, res, next) => {
  console.log("Time: " + Date.now());
  next();
});

// route for root
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

// access with parameter
router.get("/parameter/:a", function(req, res, next) {
  res.send(req.params.a);
});

// multiple callbacks
router.get(
  "/multiple",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res, next) => {
    console.log("second");
    res.send("output from second callback");
  }
);

router
  .route("/route")
  .get((req, res) => {
    res.send("route with get");
  })
  .post((req, res) => {
    res.send("route with post");
  });
module.exports = router;
