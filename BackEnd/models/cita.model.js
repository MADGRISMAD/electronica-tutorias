const Joi = require('joi');

// Define the schema
const CitaSchema = Joi.object({
    fecha: Joi.date().required().min('now'),
    // hora: Joi.number().required().min(0).max(23),
    // minutos: Joi.number().required().min(0).max(59),
    numeroDeControl: Joi.string().required(),
    // idTutor: Joi.string().required(),
    // idMateria: Joi.string().required(),
});

module.exports = CitaSchema;