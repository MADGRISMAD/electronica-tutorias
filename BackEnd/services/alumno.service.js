const {Alumno:db} = require("../config/db.config");

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
