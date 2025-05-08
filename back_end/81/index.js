const express = require("express");
const app = express();
const port = 3000;

//middle ware invoking ..
// app.use(express.json());

// //midddleware for login auth and validation----order matters
// let log_middleware = (req, res, next) => {
//   console.log("logging in here");
//   next();
// };
// app.use(log_middleware);

// let log_auth_middleware = (req, res, next) => {
//   console.log("auth in here");
//   res.send("moving back home");
//   // next();
// };
// app.use(log_auth_middleware);

// let log_valid_middleware = (req, res, next) => {
//   console.log("valid in here");
//   next();
// };
// app.use(log_valid_middleware);

// app.get("/", (req, res) => {
//   console.log(req.body);
//   res.send("hi there ");
// });

const route = require("./routes/routes");
app.use("/api", route);

app.listen(port, () => {
  console.log(`listening on port no ${port}`);
});
