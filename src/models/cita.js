const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema(
    {
        patient_id: {Type: mongoose.Types.ObjectId, ref: 'paciente'},
        specialty_id: {Type: mongoose.Types.ObjectId, ref: 'especialidad'},
        appointmentDate: {Type: Date},
        reason: {Type: String},
        status: {Type: String},
        observations: {Type: String},
    }, {timestamps: true});

module.exports = mongoose.model('cita', appointmentSchema)