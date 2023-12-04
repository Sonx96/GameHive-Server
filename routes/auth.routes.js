const router = require("express").Router();

const User = require("../models/User.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const isTokenValid = require("../middlewares/auth.middlewares")

// POST "/api/auth/signup" => recibir data del usuario y lo crea en la BD
router.post("/signup", async (req, res, next) => {
    // console.log(req.body)
  
    const { username, email, password } = req.body
  
    // implementariamos todas las validaciones de backend igual a M2
  
    if ( !username || !email || !password ) {
      res.status(400).json({ errorMessage: "Todos los campos deben estar llenos" })
      return // deten la ejecución de la ruta
    }
  
    // que la contraseña sea suficientemente segura
    // que el correo electronico tenga formato correcto
    // que el campo de nombre tenga una cantidad de caracteres correcta
    // etc... y todas estas validaciones, se les dejamos que las hagan ustedes en el proyecto :)
  
    try {
      
      const foundEmail = await User.findOne({ email: email })
      if (foundEmail) {
        res.status(400).json({ errorMessage: "Correo electronico ya registrado" })
        return
      }

      // validar tambien que el username no se pueda duplicar... de tarea.
      const foundUsername = await User.findOne({ username: username })
      if (foundUsername) {
        res.status(400).json({ errorMessage: "Usuario registrado" })
        return
      }
  
  
      // cifrar la contraseña
      const salt = await bcrypt.genSalt(12)
      const hashPassword = await bcrypt.hash(password, salt)
      console.log(hashPassword)


      // creamos usuario
      await User.create({
        username,
        email,
        password: hashPassword
      })

      res.status(201).json("usuario creado")

    } catch (error) {
      next(error)
    }
  
  })


// POST "/api/auth/login" => recibir credenciales del usuario y validarlo
router.post("/login", async (req, res, next) => { 

    console.log(req.body)
    const { email, password} = req.body

    if ( !email || !password) {
        res.status(400).json({ errorMessage: "Todos los campos deben estar llenos"})
        return
    }

    try {

        const foundUser = await User.findOne({ email: email })
        if (!foundUser) {
            res.status(400).json({errorMessage: "Usuario no registrado"})
            return
        }

        const isPasswordValid = await bcrypt.compare(password, foundUser.password)
        if (!isPasswordValid) {
            res.status(400).json({errorMessage: "Contraseña no valida"})
            return
        }

        const payload = {
            _id: foundUser._id,
            email: foundUser.email
        }

        const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, {expiresIn: "2d"})

        res.json ({authToken: authToken})

    } catch {
        next(error)
    }
})


// GET "/apit/auth/verify" => Indicar al FE si está que visita la pagina está activo y quien es
router.get("/verify", isTokenValid, (req, res, next) => {
  
  res.json("todo ok")
})

module.exports = router;