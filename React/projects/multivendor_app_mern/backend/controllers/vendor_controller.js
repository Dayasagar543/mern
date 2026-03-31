const vendor = require("../models/vendor_model");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const Vendor = require("../models/vendor_model");

const vendor_registration = async (req, res) => {
  const { name, age, gender, email, password } = req.body;

  try {
    const vendorEmail = await vendor.findOne({ email });
    if (vendorEmail) {
      return res.status(400).json("email already exists");
    }
    const hashed_password = await bcryptjs.hash(password, 10);
    const new_user = new Vendor({
      name,
      age,
      gender,
      email,
      password: hashed_password,
    });
    await new_user.save();
    res
      .status(201)
      .json({ message: "user regisitered successfull ", sucess: true });
    // .json("user regisitered successfull ");
    console.log("user created successfull");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "internal server error" });
  }
};

const vendor_login = async (req, res) => {
  // experimental creadentials
  //  {
  //     "email": "ramu@gmail.com",
  //     "password": "ramesh123"
  // }

  try {
    const { email, password } = req.body;
    const vendor = await Vendor.findOne({ email });
    if (!vendor || !bcryptjs.compare(password, vendor.password)) {
      return res
        .status(401)
        .json({ error: "the password or the email are incorrect" });
    }
    res.status(201).json({ success: "login sucessful" });
    console.log(email);
  } catch (error) {
    console.error(error);
    res.status(501).json({ error: "internal server error" });
  }
};

const vendor_update = async (req, res) => {
  const { id } = req.body;
};
const vendor_delete = async (req, res) => {};

module.exports = { vendor_registration, vendor_login, vendor_update };
