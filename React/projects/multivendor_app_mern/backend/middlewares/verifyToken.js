const Vendor = require("../models/Vendor_model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();
secret_key = process.env.whatisyourname;
const verifyToken = async (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    return res.status(400).json({ error: "Token is required" });
  }
  try {
    const decoded = jwt.verify(token, secret_key);
    const vendor = await Vendor.findById(decoded.vendorId);
    if (!vendor) {
      return res.status(404).json({ error: "vendor not found" });
    }
    req.vendorId == vendor._id;
    next();
  } catch (error) {
    console.error(error);
    req.status(501).json({ error: "Invalid token " });
  }
};

module.exports = { verifyToken };
