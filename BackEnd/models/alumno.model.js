const Joi = require('joi');

// Define the schema
const AlumnoSchema = Joi.object({
    nombres: Joi.string().optional().uppercase(),
    apellidos: Joi.string().optional().uppercase(),
    numeroDeControl: Joi.string().required().uppercase(),
    carrera: Joi.string().optional(),
    semestreActual: Joi.number().optional().min(1).max(15),
    // email: Joi.string().email().required(),
    contrasena: Joi.string().required(),
    confirmarContrasena: Joi.string().optional(),
});

module.exports = AlumnoSchema;