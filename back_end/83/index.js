const express = require("express");
const app = express();``
const dotenv = require("dotenv");
dotenv.config()
const port = process.env.PORT;



app.use(express.json());
DB_connection();

app.get("/", (req, res) => {
  console.log("we are running app");
  res.send("the app is running ");
});

app.listen(port, () => {
  console.log(`the port is running at ${port}`);
});
