const express = require("express");
const router = express.Router();
const {
  listPost,
  myPost,
  createPost,
  deletePost,
  postDetail,
  addOrRemoveFavoite
} = require("../controllers/post");
const { authCheck } = require("../middleweres/auth");

//ENDPOINT http://localhost:5001/api/listpost
router.get("/listpost", listPost);
//ENDPOINT http://localhost:5001/api/mypost
router.get("/mypost", authCheck, myPost);
//ENDPOINT http://localhost:5001/api/postdetail/id
router.get("/postdetail/:id", postDetail);
//ENDPOINT http://localhost:5001/api/createpost
router.post("/createpost", authCheck, createPost);
//ENDPOINT http://localhost:5001/api/deletepost/id
router.delete("/deletepost/:id", authCheck, deletePost);


//ENDPOINT http://localhost:5001/api/addfovorite
router.post("/addfavorite", authCheck, addOrRemoveFavoite);

module.exports = router;
