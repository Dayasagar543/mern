const { Schema, model } = require("mongoose");

const Student = new Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const student = model("student", Student);

module.exports = student;
