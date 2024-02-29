const Joi = require ("joi");

const claseSchema = Joi.object({
    nombre: Joi.string().required(),
    idMaestro: Joi.string().required(),
    alumnos: Joi.array().items(Joi.string()).required(),
    finalizada: Joi.boolean().required(),
});

module.exports = claseSchema;
