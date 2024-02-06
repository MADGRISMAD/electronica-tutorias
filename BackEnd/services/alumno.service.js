// DEPENDENCY INJECTION
// CHANGE TO YOUR OWN DATABASE IF YOU WANT
const db = require('../db/mongodb');

class AlumnoService {
    constructor() {
        this.db = db;
    }

    async createAlumno(data) {
        return this.db.createAlumno(data);
    }

    async getAlumnos() {
        return this.db.getAlumnos();
    }

    async getAlumno(numControl) {
        return this.db.getAlumno(numControl);
    }

    async updateAlumno(numControl, data) {
        return this.db.updateAlumno(numControl, data);
    }

    async deleteAlumno(numControl) {
        return this.db.deleteAlumno(numControl);
    }
}

const alumnoService = new AlumnoService();

module.exports = alumnoService;