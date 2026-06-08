const mongoose = require('mongoose')

const equipmentSchema = new mongoose.Schema(
    {
        equipmentName: {Type: String},
        description: {Type: String},
        brand: {Type: String},
        model: {Type: String},
        purchaseDate: {Type: Date},
        maintenanceDate: {Type: Date},
        location: {Type: String},
        image: {Type: String},
        status : {Type: String},
        isAvailable : {Type: Boolean},
    }, {timestamps: true});

module.exports = mongoose.model('equipo', equipmentSchema)