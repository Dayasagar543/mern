// including the express modules and initialiasing an app
const express = require("express");
const app = express();
const api =require("./routes/routes")
// port number
const port = 3000;



app.use("/api",api);


app.listen(port, () => {
  console.log(`hi there listening on ${port}`);
});
