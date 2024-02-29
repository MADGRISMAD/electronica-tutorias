const Joi = require ("joi");

const maestroSchema = Joi.object({

    numeroDeControl: Joi.string().required(),
    nombre: Joi.string().required(),
    apellidoPaterno: Joi.string().required(),
    apellidoMaterno: Joi.string().required(),
    // Only tec domain
    correo: Joi.string().email().required().regex(/"@tectijuana.edu.mx$|@tijuana.tecnm.mx$"/),
    // International prefix
    prefijo: Joi.string().required().regex(/"^\d{3}$"/),

    telefono: Joi.string().required().regex(/"^\d{10}$"/),
    extension: Joi.string().required().regex(/"^\d{4}$"/),
});

module.exports = maestroSchema;