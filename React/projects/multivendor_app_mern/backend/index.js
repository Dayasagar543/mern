const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");

env.config();
const app = express();

const port = 5000;

mongoose
  .connect(process.env.connection_uri)
  .then(() => {
    console.log("the connection is successfull");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(port, () => {
  console.log("the app is runing at " + `${port}`);
});

app.get("/", (req, res) => {
  res.send("<h1>welcome to tov foods </h1>");
});
