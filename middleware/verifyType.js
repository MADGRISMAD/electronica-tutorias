const verifyMaestro = async (req, res, next) => {
    // Check if the user is logged in and is a teacher
    // Sends 401 if not logged in or 403 if not a teacher
    if (req.session.usuario.tipo === "maestro") next();
    else if (req.session.usuario.tipo === "alumno") res.status(403).send("Forbidden");
    else res.status(401).send("Unauthorized");
};

const verifyAlumno = async (req, res, next) => {
    // Check if the user is logged in and is a student
    // Sends 401 if not logged in or 403 if not a student
    if (req.session.usuario.tipo === "alumno") next();
    else if (req.session.usuario.tipo === "maestro") res.status(403).send("Forbidden");
    else res.status(401).send("Unauthorized");
};

module.exports = {
    verifyMaestro,
    verifyAlumno,
};
