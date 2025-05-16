const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTION_STRING);

const Student = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: Enumerator,
    require: true,
  },
  date: new Date().getDate,
});

const student = new mongoose.model("student",Student)

module.exports = student;