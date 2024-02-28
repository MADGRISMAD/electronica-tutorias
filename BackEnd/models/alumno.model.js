const Joi = require('joi');

// Define the schema
const AlumnoSchema = Joi.object({
    nombres: Joi.string().required().uppercase(),
    apellidos: Joi.string().required().uppercase(),
    // This is a unique field
    numeroDeControl: Joi.string().required().uppercase(),
    carrera: Joi.string().required(),
    semestreActual: Joi.number().required().min(1).max(15),
    // email: Joi.string().email().required(),
    contrasena: Joi.string().required(),
    confirmarContrasena: Joi.string().required(),
});

module.exports = AlumnoSchema;