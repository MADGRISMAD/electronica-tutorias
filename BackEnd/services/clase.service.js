const {Clase:db} = require("../configuration/db.conf");


async function createClase(data) {
    return db.createClase(data);
}

async function getClases() {
    return db.getClases();
}

async function getClase(id) {
    return db.getClase(id);
}

async function updateClase(id, data) {
    return db.updateClase(id, data);
}

async function deleteClase(id) {
    return db.deleteClase(id);
}

module.exports = {
    createClase,
    getClases,
    getClase,
    updateClase,
    deleteClase,
};