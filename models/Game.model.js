const { Schema, model } = require("mongoose");

const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: String,
  company: String,
  category: String,
  players: String,
  age: String,
  image: String,
  tutorial: String,
});

const Game = model("Game", gameSchema);

module.exports = Game;
