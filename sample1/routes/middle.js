var express = require("express");
var app = express.Router();

app.use((req, res, next) => {
  req.requestTime = Date.now();
  next();
});

app.get("/", (req, res) => {
  let responseText = "Hello World";
  responseText += "requestTime: " + req.requestTime;
  res.send(responseText);
});

module.exports = app;
