// DEPENDENCY INJECTION
// CHANGE TO YOUR OWN DATABASE IF YOU WANT
let db;
if (process.env.NODE_ENV === "prod") {
    db = require("../db/mongodbProd");
}
if (process.env.NODE_ENV === "dev") {
    db = require("../db/mongodbDev");
}

async function createAlumno(data) {
    return db.createAlumno(data);
}

async function getAlumnos() {
    return db.getAlumnos();
}

async function getAlumno(numControl) {
    return db.getAlumno(numControl);
}

async function updateAlumno(numControl, data) {
    return db.updateAlumno(numControl, data);
}

async function deleteAlumno(numControl) {
    return db.deleteAlumno(numControl);
}

// const alumnoService = new AlumnoService();
// alumnoService.get
module.exports = {
    createAlumno,
    getAlumnos,
    getAlumno,
    updateAlumno,
    deleteAlumno,
};
