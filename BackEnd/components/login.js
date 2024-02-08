const  AlumnoService  = require("../services/alumno.service");
const AlumnoSchema = require("../models/alumno.model");
const bcrypt = require("bcrypt");
// const bcrypt = require("bcrypt");
const alumnoLogin = async (req, res, next) => {
    // Get the data from the request
    const { value, error } = AlumnoSchema.validate(req.body);
    if (error)
        return res.status(400).json({ message: error.details[0].message });
    const { numeroDeControl, contrasena } = value;
    // Check if the user exists
    const alumno = await AlumnoService.getAlumno(numeroDeControl);


    // If the user exists, check if the password is correct
    if (!alumno || !bcrypt.compare(contrasena, alumno.contrasena))
        res.status(401).send("Unauthorized");

    req.session.usuario = {
        tipo: "alumno",
        numControl: alumno.numeroDeControl,
    };
    console.log(req.session);

    // If the password is correct, continue
    next();
};

module.exports = {
    alumnoLogin,
};
