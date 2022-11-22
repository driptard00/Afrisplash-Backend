const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/auth");
const {
    SampleCode
} = require("../controllers/blog")

//TODO Protect Router 
router.get("/test", SampleCode);

module.exports = router;