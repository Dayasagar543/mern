const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("hellow world!");
// });
app.get("/", (req, res) => {
  res.sendFile('./index.html')
});

// requests

// get requests
app.get("/home", (req, res) => {
  res.send("hi there ");
});

app.put("/items/:id", (req, res) => {
  res.send("got a put request");
});

app.post("/items/:id", (req, res) => {
  res.send("got a post request");
});

app.delete("/items/:id", (req, res) => {
  res.send("got a delete request");
});

app.listen(port, () => {
  console.log(`dev  app listening on port ${port}`);
});
