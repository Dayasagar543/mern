const mongoose = require("mongoose");

const vendor_schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: trusted,
  },
  password: {
    type: String,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendor_schema);
module.exports = Vendor;
