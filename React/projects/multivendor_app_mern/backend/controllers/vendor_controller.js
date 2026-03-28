const vendor = require("../models/vendor_model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

const vendor_register = async (req, res) => {
  const { name, age, gender, email, password } = req.body;

  try {
    const vendorEmail = await vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("email already exists");
    }
    const hashed_password = await bcryptjs.hash(password, 10);
    const newVendor = new vendor({
      name,
      age,
      gender,
      email,
      password: hashed_password,
    });
    await newVendor.save();
    res.status(201).json({ message: "vendor resigerted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
};

module.exports = { vendor_register };
