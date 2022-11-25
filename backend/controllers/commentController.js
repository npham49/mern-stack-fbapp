const asyncHandler = require("express-async-handler");

const Goal = require("../model/goalModel");
const User = require("../model/userModel");
const Comment = require("../model/commentModel")

// @desc    Get comments
// @route   Get api/comments
// @access  Public
const getComments = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.body.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const comments = await Comment.find({goal:req.body.goalId});


  res.status(200).json(comments);
});

// @desc    Set goals
// @route   POST api/goals
// @access  Private
const setComment = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add text field");
  }
  if (!req.body.score) {
    res.status(400);
    throw new Error("Please add score field");
  }

  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(400);
    throw new Error("User not found");
  }

  const goal = await Goal.findById(req.body.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }
  const comment = await Comment.create({
    text: req.body.text,
    score: req.body.score,
    user: req.user.id,
    goal: req.body.goalId,
  });

  res.status(200).json(comment);
});

// @desc    Update goals
// @route   SET api/goals/:id
// @access  Private
const updateComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    res.status(400);
    throw new Error("Comment not found");
  }

  const goal = await Goal.findById(comment.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id)

  //check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }


  //make sure the logged in user matches the goal user
  if(comment.user.toString()!==user.id){
    res.status(401)
    throw new Error('User not authorized')

  }

  const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedComment);
});

// @desc    Update goals
// @route   SET api/goals/:id
// @access  Private
const deleteComment = asyncHandler(async (req, res) => {
  const comment = await Comment.findById(req.params.id);

  if (!comment) {
    res.status(400);
    throw new Error("Comment not found");
  }

  const goal = await Goal.findById(comment.goalId);
  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const user = await User.findById(req.user.id)

  //check for user
  if(!user) {
    res.status(401)
    throw new Error('User not found')
  }


  //make sure the logged in user matches the goal user
  if(comment.user.toString()!==user.id){
    res.status(401)
    throw new Error('User not authorized')

  }

  await comment.remove()

  res.status(200).json({id:req.params.id});
});

module.exports = {
  getComments,
  setComment,
  updateComment,
  deleteComment
}