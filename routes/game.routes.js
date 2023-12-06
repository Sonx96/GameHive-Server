const Game = require("../models/Game.model")

const router = require("express").Router()



// GET "/" => enviar todos los juegos. Name y Image.
router.get("/", async (req, res, next) => {

    try {
        const data = await Game.find().select({name: 1, image: 1})

        res.json(data)

    } catch (error) {
        next(error)
    }
})

// POST "/addgame" => recibir la data del juego y crearla en BD
router.post("/addgame", async (req, res, next) => {
    
    const { name, description, company, category, players, age, image, tutorial} = req.body

    //validaciones

    if ( !name || !description || !company || !category || !players || !age || !image || !tutorial ) {
        res.status(400).json({ errorMessage: "Todos los campos deben estar llenos"})
        return
    }

    try{
        // validar que no se dupliquen los juegos
        const foundGame = await Game.findOne({ name: name})
        if (foundGame) {
            res.status(400).json({ errorMessage: "Juego ya registrado"})
        }

        await Game.create({
            name,
            description,
            company,
            category,
            players,
            age,
            image,
            tutorial,
        })

        res.status(201).json("juego creado")

    } catch (error) {
        next(error)
    }
})

module.exports = router