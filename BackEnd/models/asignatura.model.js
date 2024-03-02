const Joi = require ("joi");

const asignaturaSchema = Joi.object({
    idAlumno: Joi.string().required(),
    idClase: Joi.string().required(),
    archivos: Joi.array().items(Joi.string()).optional(),
    // DESPUES DE CREADO
    // 0-100 Cuando el profesor califique
    calificacion: Joi.number().optional().min(0).max(100),
    comentarios: Joi.array().items(Joi.string()).optional(),
    comentariosPrivados: Joi.array().items(Joi.string()).optional(),
});

module.exports = asignaturaSchema;