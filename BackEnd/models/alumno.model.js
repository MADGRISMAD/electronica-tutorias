const Joi = require('joi');

// Define the schema
const AlumnoSchema = Joi.object({
    nombres: Joi.string().required(),
    apellidos: Joi.string().required(),
    numeroDeControl: Joi.string().required(),
    carrera: Joi.string().required(),
    semestreActual: Joi.number().required(),
    // email: Joi.string().email().required(),
    contrasena: Joi.string().required(),
    confirmarContrasena: Joi.string().optional(),
});

module.exports = AlumnoSchema;