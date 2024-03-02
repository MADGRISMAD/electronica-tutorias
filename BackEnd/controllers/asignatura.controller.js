const asignaturaController = require("../controllers/asignatura.controller");
const asignaturaSchema = require("../models/asignatura.model");

const createAsignatura = async (req, res, next) => {
    const { value, error } = asignaturaSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const asignatura = await asignaturaController.createAsignatura(value);
        return res.status(201).send(asignatura);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getAsignaturas = async (req, res, next) => {
    try {
        const asignaturas = await asignaturaController.getAsignaturas();
        return res.status(200).send(asignaturas);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getAsignatura = async (req, res, next) => {
    try {
        const asignatura = await asignaturaController.getAsignatura(
            req.params.id
        );
        if (!asignatura) {
            return res.status(404).send("Asignatura no encontrada");
        }
        return res.status(200).send(asignatura);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const updateAsignatura = async (req, res, next) => {
    const { value, error } = asignaturaSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const asignatura = await asignaturaController.updateAsignatura(
            req.params.id,
            value
        );
        if (!asignatura) {
            return res.status(404).send("Asignatura no encontrada");
        }
        return res.status(200).send(asignatura);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteAsignatura = async (req, res, next) => {
    try {
        const asignatura = await asignaturaController.deleteAsignatura(
            req.params.id
        );
        if (!asignatura) {
            return res.status(404).send("Asignatura no encontrada");
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = {
    createAsignatura,
    getAsignaturas,
    getAsignatura,
    updateAsignatura,
    deleteAsignatura,
};
