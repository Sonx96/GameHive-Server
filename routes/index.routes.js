const router = require("express").Router();
const Game = require("../models/Game.model")

// router.get("/", (req, res, next) => {
//   res.json("All good in here");
// });

router.get("/", async (req, res, next) => {

  try {
      const data = await Game.find().select({name: 1, image: 1})

      res.json(data)

  } catch (error) {
      next(error)
  }
})

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

const gameRouter = require("./game.routes")
router.use("/auth", gameRouter)

module.exports = router;
