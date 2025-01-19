const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.use(cookieParser());
app.get("/", function (req, res) {
  let token = jwt.sign({ email: "harsh@gmail.com" }, "secret");
  res.cookie("token", token);
  res.send("done");
});
app.get("/red", function (req, res) {
  let data = jwt.verify(req.cookies.token, "secret");
});
app.listen(3000);
