const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user: String,
  comment: String,
  game: String,
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
