

// POST "/:gameid" recibir la data del comentario y crearla
router.post("/gameid", async (req, res, next) => {

    console.log(req.body)
    const { user, comment, game} = req.body

    try{
        await Game.create({
            user: req.body.user,
            comment: req.body.comment,
            game: req.body.game
        })

        res.status(201).json("comentario creado")

    } catch (error) {
        next(error)
    }
})

// DELETE "/:gameId" borrar comentario por su id
router.delete("/:gameid", asyn)