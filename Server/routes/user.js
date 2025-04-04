const express = require("express");
const router = express.Router();
const { createUser, myUser, userDetail } = require("../controllers/user");
const { authCheck } = require("../middleweres/auth");

// ENDPOINT http://localhost:5001/api/readuser
router.get("/myuser", authCheck, myUser);
// ENDPOINT http://localhost:5001/api/userdetail/id
router.get("/userdetail/:id",  userDetail);
// ENDPOINT http://localhost:5001/api/createuser
router.post("/createuser", authCheck, createUser);

module.exports = router;
