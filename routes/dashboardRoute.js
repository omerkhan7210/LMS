const express = require("express")
const router = express.Router();
const {dashboard,courses_registered} = require("../controllers/dashboardController")

router.get("/",dashboard);
module.exports = router;