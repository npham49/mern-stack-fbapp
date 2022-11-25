const express = require("express");
const { appendFile } = require("fs");
const router = express.Router();
const {
  getComments,
  setComment,
  updateComment,
  deleteComment
} = require("../controllers/commentController");
const {protect} = require('../middleware/authMiddleware')

router.route("/").get(getComments).post(protect,setComment);

router.route("/:id").put(protect,updateComment).delete(protect,deleteComment);

// router.get('/', getComments)

// router.post('/', setComments)

// router.put('/:id', updateComments)

// router.delete('/:id', deleteComments)

module.exports = router;