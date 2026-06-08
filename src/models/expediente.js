const mongoose = require('mongoose')

const recordSchema = new mongoose.Schema(
    {
        patient_id: {type: mongoose.Types.ObjectId, ref: 'paciente'},
        diagnosis: {type: String},
        medications :
        [
            {
                medicineName: {type: String}
            }
        ],
        medicalNotes: {type: String},
    }, {timestamps: true});

module.exports = mongoose.model('expediente', recordSchema)