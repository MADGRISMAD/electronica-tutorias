const CitaSchema = require("../models/cita.model");
const CitaService = require("../services/cita.service");

const citaRegistro = async (req, res, next) => {
    const { error, value } = CitaSchema.validate(req.body);
    const {
        fecha,
        hora,
        minutos,
        numeroDeControl,
    } = value;
    if (error) {
        return res
            .status(400)
            .json({ message: error.details[0].message });
    }
    const cita = {
        fecha,
        hora,
        minutos,
        numeroDeControl,
    };
    try {
        const newCita = await CitaService.createCita(cita);
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
}

const getCitaByAlumno = async (req, res, next) => {
    const { id } = req.params;
    try {
        const cita = await CitaService.getCitaByAlumno(id);
        return res.status(200).json(cita);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = {
    citaRegistro,
    getCitas,
    getCitaByAlumno
};