//stores all the item specific routes ..
const express = require("express");
const router = express.Router();

// requests
router.get("/", (req, res) => {
  res.send("hellow world!");
});

// router.get("/", (req, res) => {
//   res.sendFile('./index.html',{root:__dirname});
// });

// get requests
router.get("/home", (req, res) => {
  // res.send("hi there ");
  res.json({ x: 21, y: "damaris", z: 32 });
});

router.put("/items/:id", (req, res) => {
  res.send("got a put request");
});

router.post("/items/:id", (req, res) => {
  res.send("got a post request");
});

router.delete("/items/:id", (req, res) => {
  res.send("got a delete request");
});

module.exports = router;
