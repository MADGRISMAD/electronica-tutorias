const nodecron = require("node-cron");
const { sendMail } = require("../configuration/nodemailer.conf");
const { getCitaByAlumno } = require("../db/mongodbProd");

// Sends an email to the alumnos that has a cita in 30 minutes every 30 minutes from 6 to 22 from Monday to Saturday
const sendMailToAlumnos = nodecron.schedule("*/30 6-22 * * 1-6", async function () {
    // Get the alumnos that has a cita in 30 minutes
    alumnos = getCitaByAlumno();

    for (alumno in alumnos) {
        // TESTING
        alumno.email = process.env.SMTP_EMAIL;
        console.log(alumno);
        sendMail({
            from: process.env.SMTP_EMAIL,
            to: alumno.email,
            subject: "Cita en 30 minutos",
            text: `Tienes una cita en 30 minutos. Fecha: ${alumno.fecha}`,
        });
    }
}, { scheduled: false });

module.exports = { sendMailToAlumnos };
