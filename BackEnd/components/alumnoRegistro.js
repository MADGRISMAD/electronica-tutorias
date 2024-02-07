const AlumnoService = require("./../services/alumno.service");
const bcrypt = require("bcrypt");
// const alumnoService = new AlumnoService();
const AlumnoSchema = require("../models/alumno.model");
// const bcrypt = require("bcrypt");
const alumnoRegistro = async (req, res, next) => {
    // Get the data from the request
    const {error, value} = AlumnoSchema.validate(req.body);
    const { nombres, apellidos, numeroDeControl, carrera, semestreActual, contrasena, confirmarContrasena } = value;
    // Check if the data is complete
    if (error) {
        return res.status(400).json({ message: validation.error.details[0].message });
    }

    // Check if the password and the confirmation are the same
    if (contrasena !== confirmarContrasena) {
        return res.status(400).json({ message: "Las contraseñas no coinciden" });
    }

    // Check if the user already exists
    const userExists = await AlumnoService.getAlumno(numeroDeControl);
    if (userExists) {
        return res.status(400).json({ message: "El usuario ya existe" });
    }

    // Hash the password
    bcrypt.hash(contrasena, 12,async function(err,hash){
        if(err){
            return res.status(500).json({ message: "Error al encriptar la contraseña" });
        }
        const user = {
            nombres,
            apellidos,
            numeroDeControl,
            carrera,
            semestreActual,
            contrasena: hash,
        };
        await AlumnoService.createAlumno(user);
    });

    // Create the user with the model
    // const user = new Alumno({
    //     nombres,
    //     apellidos,
    //     numeroDeControl,
    //     carrera,
    //     semestreActual,
    //     contrasena: hashedPassword,
    // });


    // Save the user

    next();
};

module.exports = {
    alumnoRegistro,
};
