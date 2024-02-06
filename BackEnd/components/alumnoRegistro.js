const { alumnoService } = require("../services/alumno.service");
// const bcrypt = require("bcrypt");
const alumnoRegistro = async (req, res, next) => {
    // Get the data from the request
    console.log(req);
    // const { numControl, password } = req.body;

    // // Check if the user exists
    // const alumno = await alumnoService.getAlumno(numControl);

    // // If the user exists, check if the password is correct
    // if (!alumno || password == alumno.password)
    //     res.status(401).send("Unauthorized");

    // req.session.usuario = {
    //     tipo: "alumno",
    //     numControl: alumno.numControl,
    //     nombre: alumno.nombre,
    // };

    // If the password is correct, continue
    next();
};

module.exports = {
    alumnoRegistro,
};
