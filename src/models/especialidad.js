const mongoose = require('mongoose')

const specialitySchema = new mongoose.Schema(
    {
        specialityName: {Type: String},
        description: {Type: String},
        isAvailable: {Type: Boolean},
    }, {timestamps: true});

module.exports = mongoose.model('Especialidad', specialitySchema)