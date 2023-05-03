const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  if (!req.cookies.auth) return res.sendStatus(404);
  res.send(req.cookies.auth);
});

router.post("/", function (req, res, next) {
  res.cookie("auth", req.body);
  res.sendStatus(200);
});

module.exports = router;
