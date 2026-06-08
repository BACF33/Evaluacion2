const mongoose = require('mongoose')

const equipmentSchema = new mongoose.Schema(
    {
        equipmentName: {type: String},
        description: {type: String},
        brand: {type: String},
        model: {type: String},
        purchaseDate: {type: Date},
        maintenanceDate: {type: Date},
        location: {type: String},
        image: {type: String},
        status : {type: String},
        isAvailable : {type: Boolean},
    }, {timestamps: true});

module.exports = mongoose.model('equipo', equipmentSchema)