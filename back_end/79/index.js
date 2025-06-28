const express = require("express");
const app = express();
const port = 3000;
// importing the item router file
const api = require("./routes/item");
app.use("/api", api);

// app.get("/", (req, res) => {
//   res.send("hello world!");
// });

app.listen(port, () => {
  console.log(`listening the port ${port}`);
});
