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
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firm: [{ type: mongoose.Schema.Types.ObjectId, ref: "Firm" }],
});

const Vendor = mongoose.model("Vendor", vendor_schema);
module.exports = Vendor;
