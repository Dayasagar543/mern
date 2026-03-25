const express = require("express");
const router = express.Router();

const Vendor_controller = require("../controllers/vendor_controller");


router.post('/register',Vendor_controller.vendor_registration)




module.exports=router