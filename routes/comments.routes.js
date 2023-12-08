const router = require("express").Router();
const Comment = require("../models/Comment.model");

//GET
router.get("/addComment", async (req, res, next) => {
  const { user, comment } = req.body;

  try {
    await Game.create({
      user,
      comment,
    });

    res.status(201).json("comment create");
  } catch (error) {
    next(error);
  }
});

// POST "/:gameid" recibir la data del comentario y crearla
router.post("/addComment", async (req, res, next) => {
  const { user, comment } = req.body;

  try {
    const newComment = await Comment.create({
      user,
      comment,
    });

    res.status(201).json({ success: true, comment: newComment });
  } catch (error) {
    next(error);
  }
});

// DELETE "/:gameId" borrar comentario por su id

module.exports = router;
