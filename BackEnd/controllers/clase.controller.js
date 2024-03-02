const claseSchema = require("../models/clase.model");
const claseService = require("../services/clase.service");

const createClase = async (req, res, next) => {
    const { value, error } = claseSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const clase = await claseService.createClase(value);
        return res.status(201).send(clase);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getClases = async (req, res, next) => {
    try {
        const clases = await claseService.getClases();
        return res.status(200).send(clases);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getClase = async (req, res, next) => {
    try {
        const clase = await claseService.getClase(req.params.id);
        if (!clase) {
            return res.status(404).send("Clase no encontrada");
        }
        return res.status(200).send(clase);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const updateClase = async (req, res, next) => {
    const { value, error } = claseSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const clase = await claseService.updateClase(req.params.id, value);
        if (!clase) {
            return res.status(404).send("Clase no encontrada");
        }
        return res.status(200).send(clase);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteClase = async (req, res, next) => {
    try {
        const clase = await claseService.deleteClase(req.params.id);
        if (!clase) {
            return res.status(404).send("Clase no encontrada");
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = {
    createClase,
    getClases,
    getClase,
    updateClase,
    deleteClase,
};