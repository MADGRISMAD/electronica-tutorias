const {Maestro:db} = require("../configuration/db.conf");

async function createMaestro(data) {
    return db.createMaestro(data);
}

async function getMaestros() {
    return db.getMaestros();
}

async function getMaestro(numEmpleado) {
    return db.getMaestro(numEmpleado);
}

async function updateMaestro(numEmpleado, data) {
    return db.updateMaestro(numEmpleado, data);
}

async function deleteMaestro(numEmpleado) {
    return db.deleteMaestro(numEmpleado);
}

module.exports = {
    createMaestro,
    getMaestros,
    getMaestro,
    updateMaestro,
    deleteMaestro,
};
