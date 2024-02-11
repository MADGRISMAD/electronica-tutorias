const AlumnoService = require("../services/alumno.service");
const AlumnoSchema = require("../models/alumno.model");
const bcrypt = require("bcryptjs");
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
    // PRODUCTION: Use the hashed password
    if (
        !alumno ||
        (!bcrypt.compare(contrasena, alumno.contrasena) &&
            process.env.NODE_ENV === "prod")
    )
        return res.status(401).send("Unauthorized");
    // DEVELOPMENT: Use the plain text password
    else if (!alumno || contrasena !== alumno.contrasena)
        return res.status(401).send("Unauthorized");

    req.session.usuario = {
        tipo: "alumno",
        numControl: alumno.numeroDeControl,
    };

    // If the password is correct, continue
    next();
};

module.exports = {
    alumnoLogin,
};
