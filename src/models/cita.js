const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema(
    {
        patient_id: {Type: mongoose.Types.ObjectId, ref: 'Paciente'},
        specialty_id: {Type: mongoose.Types.ObjectId, ref: 'Especialidad'},
        appointmentDate: {Type: Date},
        reason: {Type: String},
        status: {Type: String},
        observations: {Type: String},
    }, {timestamps: true});

module.exports = mongoose.model('Cita', appointmentSchema)