const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const cookieRouter = require("./routes");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/health", (req, res) => res.sendStatus(200));

app.use("/cookie", cookieRouter);

module.exports = app;
