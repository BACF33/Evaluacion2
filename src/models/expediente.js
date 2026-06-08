const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema(
    {
        patient_id: {Type: mongoose.Types.ObjectId, ref: 'paciente'},
        diagnosis: {Type: String},
        medications :
        [
            {
                medicineName: {Type: String}
            }
        ],
        medicalNotes: {Type: String},
    }, {timestamps: true});

module.exports = mongoose.model('expediente', recordSchema)