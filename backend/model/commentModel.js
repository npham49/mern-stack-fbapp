const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema(
  {
    //Having a user associated with a Comment
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    goal: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Goal"
    },
    text: {
      type: String,
      required: [true, "Please add a text value"],
    },
    score: {
        type: Number,
        required: [true, "Please add a score value"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", CommentSchema);