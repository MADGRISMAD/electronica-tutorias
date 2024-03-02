const maestroService = require('../services/maestro.service');
const maestroSchema = require('../models/maestro.model');

const createMaestro = async (req, res, next) => {

    const { value, error } = maestroSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const maestro = await maestroService.createMaestro(value);
        return res.status(201).send(maestro);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getMaestros = async (req, res, next) => {
    try {
        const maestros = await maestroService.getMaestros();
        return res.status(200).send(maestros);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const getMaestro = async (req, res, next) => {
    try {
        const maestro = await maestroService.getMaestro(req.params.id);
        if (!maestro) {
            return res.status(404).send("Maestro no encontrado");
        }
        return res.status(200).send(maestro);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const updateMaestro = async (req, res, next) => {
    const { value, error } = maestroSchema.validate(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    try {
        const maestro = await maestroService.updateMaestro(req.params.id, value);
        if (!maestro) {
            return res.status(404).send("Maestro no encontrado");
        }
        return res.status(200).send(maestro);
    } catch (error) {
        return res.status(500).send(error);
    }
};

const deleteMaestro = async (req, res, next) => {
    try {
        const maestro = await maestroService.deleteMaestro(req.params.id);
        if (!maestro) {
            return res.status(404).send("Maestro no encontrado");
        }
        return res.status(204).send();
    } catch (error) {
        return res.status(500).send(error);
    }
};

module.exports = {
    createMaestro,
    getMaestros,
    getMaestro,
    updateMaestro,
    deleteMaestro
}