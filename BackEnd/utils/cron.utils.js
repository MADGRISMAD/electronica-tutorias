const nodecron = require('node-cron');
const { sendMail } = require('../configuration/nodemailer.conf');
const { getCitaByAlumno } = require('../db/mongodbProd');
// This function is used to send an email to the users 30 minutes before the appointment
nodecron.schedule('*/30 * * * *', async () => {
    // Get the alumnos that has a cita in 30 minutes
    alumnos = getCitaByAlumno();

    for(alumno in alumnos){
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
});