const CitaSchema = require("../models/cita.model");
const CitaService = require("../services/cita.service");

const citaRegistro = async (req, res, next) => {
    const { error, cita } = CitaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    try {
        const newCita = await CitaService.createCita(cita, req.session.usuario.email);
        return res.status(201).json(newCita);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getCitas = async (req, res, next) => {
    try {
        const citas = await CitaService.getCitas();
        return res.status(200).json(citas);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getCitasByAlumno = async (req, res, next) => {
    const { id } = req.params;
    try {
        const cita = await CitaService.getCitasByAlumno(id);
        return res.status(200).json(cita);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
const updateCita = async (req, res, next) => {
    const { id } = req.params;
    const { error, value } = CitaSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }

    try {
        const cita = await CitaService.updateCita(id, value);
        return res.status(200).json(cita);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
module.exports = {
    citaRegistro,
    getCitas,
    getCitasByAlumno,
    updateCita,
};
