let db;
const nodemailer = require("nodemailer");
const { sendMail } = require("../configuration/nodemailer.conf");
if (process.env.NODE_ENV === "prod") {
    db = require("../db/mongodbProd");
}
if(process.env.NODE_ENV === "dev") {
    db = require("../db/mongodbDev");
}

async function createCita(data, email = "") {
    sendMail({
        from: process.env.SMTP_EMAIL,
        to: email,
        subject: "Cita Registrada",
        text: `Tu cita ha sido registrada con éxito. Fecha: ${data.fecha}`,
    
    })
    return db.createCita(data);
}

async function getCitas() {
    return db.getCitas();
}

async function getCita(id) {
    return db.getCita(id);
}

async function getCitaByAlumno(id) {
    return db.getCitaByAlumno(id);
}

async function updateCita(id, data) {
    return db.updateCita(id, data);
}

async function deleteCita(id) {
    return db.deleteCita(id);
}

module.exports = {
    createCita,
    getCitas,
    getCita,
    getCitaByAlumno,
    updateCita,
    deleteCita,
};