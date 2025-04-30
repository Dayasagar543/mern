const express = require("express");
const app = express();
const port = 3000;

//middle ware invoking ..
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("hi there ");
});

app.listen(port, () => {
  console.log(`listening on port no ${port}`);
});
