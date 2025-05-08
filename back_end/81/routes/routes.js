const express = require("express");
const router = express.Router();

//middle wares
const auth = (req, res, next) => {
  console.log("I am in auth middleware");
  req.user = { UserId: 1, role: "student" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "Not a valid user",
    });
  }
};

const isStudent = (req, res, next) => {
  if (req.user.role == "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "This route is only for student ",
    });
  }
};

const isAdmin = (req, res, next) => {
  if (req.user.role == "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "This route is only for admin ",
    });
  }
};

//routes

router.get("/student", auth, isStudent, (req, res) => {
  res.send("This is a student route");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("This is a admin route");
});
module.exports = router;
