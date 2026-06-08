const mongoose = require('mongoose')

const appointmentSchema = new mongoose.Schema(
    {
        patient_id: {type: mongoose.Types.ObjectId, ref: 'paciente'},
        specialty_id: {type: mongoose.Types.ObjectId, ref: 'especialidad'},
        appointmentDate: {type: Date},
        reason: {type: String},
        status: {type: String},
        observations: {type: String},
    }, {timestamps: true});

module.exports = mongoose.model('cita', appointmentSchema)