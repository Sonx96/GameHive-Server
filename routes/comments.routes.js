const router = require("express").Router();
const Comment = require("../models/Comment.model")

//GET 


// POST "/:gameid" recibir la data del comentario y crearla
router.post("/addComment", async (req, res, next) => {

    const { user, comment, game} = req.body

    try{
        await Comment.create({
            user: req.body.user,
            comment: req.body.comment,
            game: req.body.game,
        })

        res.status(201).json("comentario creado")

    } catch (error) {
        next(error)
    }
})

// DELETE "/:gameId" borrar comentario por su id

module.exports = router