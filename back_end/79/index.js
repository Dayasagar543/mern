const express = require("express");
const app = express();
const port = 3000;
// importing the item router file
const api = require("./routes/item");
app.use("/api", api);

// app.get("/", (req, res) => {
//   // res.send("<p>hello world!</p>");
//   res.sendFile("./index.html",{root:__dirname})
// });

// app.post("/items", (req, res) => {
//   res.send("<p>hello world!</p>");
// });

// app.put("/items/:id", (req, res) => {
//   res.send("hello world!");
// });

// app.delete("/items/:id", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  console.log(`listening the port ${port}`);
});
