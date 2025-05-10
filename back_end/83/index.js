const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT;

app.get("/", (req, res) => {
  console.log("we are running app");
  res.send("the app is running ");
});

app.listen(port, () => {
  console.log(`the port is running at ${port}`);
});
