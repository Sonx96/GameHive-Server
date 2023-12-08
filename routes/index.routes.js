const router = require("express").Router();
const Game = require("../models/Game.model");

router.get("/", async (req, res, next) => {
  try {
    const data = await Game.find().select({ name: 1, image: 1 });

    res.json(data);
  } catch (error) {
    next(error);
  }
});

const authRoutes = require("./auth.routes");
router.use("/auth", authRoutes);

const gameRoutes = require("./game.routes");
router.use("/game", gameRoutes);

const commentRoutes = require("./comments.routes");
router.use("/comment", commentRoutes);

module.exports = router;
