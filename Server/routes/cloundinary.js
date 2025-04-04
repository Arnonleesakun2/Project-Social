const express = require("express");
const router = express.Router();
const { authCheck } = require("../middleweres/auth");
const { uploadimage } = require("../controllers/cloundinary");
//ENDPOINT http://localhost:5001/api/uploadimage
router.post("/uploadimage", authCheck, uploadimage);

module.exports = router;
