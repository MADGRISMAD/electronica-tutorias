const {Asignatura:db} = require("../config/db.conf");

async function createAsignatura(data) {
    return db.createAsignatura(data);
}

async function getAsignaturas() {
    return db.getAsignaturas();
}

async function getAsignatura(id) {
    return db.getAsignatura(id);
}

async function updateAsignatura(id, data) {
    return db.updateAsignatura(id, data);
}

async function deleteAsignatura(id) {
    return db.deleteAsignatura(id);
}

module.exports = {
    createAsignatura,
    getAsignaturas,
    getAsignatura,
    updateAsignatura,
    deleteAsignatura,
};