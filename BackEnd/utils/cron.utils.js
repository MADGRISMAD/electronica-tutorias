const nodecron = require('node-cron');
const { sendMail } = require('../configuration/nodemailer.conf');
const CitaService = require("../services/cita.service");
const AlumnoService = require("../services/alumno.service");
// This function is used to send an email to the users 30 minutes before the appointment
nodecron.schedule('*/30 * * * *', async () => {
    // Get all the alumnos
    alumnos = AlumnoService.getAlumnos();

    // Get all the citas from each alumno
    sendMail({
        from: process.env.SMTP_EMAIL,
        to: process.env.SMTP_EMAIL,
        subject: "Tu cita está por comenzar",
        text: `Tu cita está por comenzar en 30 minutos.`,
    });
});