const { Schema, model } = require("mongoose");

const commentSchema = new Schema({
  user: ObjectId,
  comment: String,
  game: ObjectId,
});

const Comment = model("Comment", commentSchema);

module.exports = Comment;
