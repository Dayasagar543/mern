const Vendor_controller = require("../controllers/vendor_controller");
const express = require("express");
const router = express.Router();

router.post("/register", Vendor_controller.vendor_registration);
router.post("/login", Vendor_controller.vendor_login);

module.exports = router;
