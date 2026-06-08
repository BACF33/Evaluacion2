const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema(
    {
        name: {Type: String},
        lastName: {Type: String},
        email: {Type: String},
        password: {Type: String},
        birthDate: {Type: Date},
        phone: {Type: String},
        address: {Type: String},
        bloodType: {Type: String},
        phoneEmergencyContacts :
        [
            {
                phone: {Type: String},
                nameContact: {Type: String}
            }
        ],
        profilePhoto : {Type: String},
        isVerified : {Type: Boolean},
        verificationCode: {Type: String},
        verificationCodeExpires: {Type: Date},
        loginAttempts: {Type: Number},
        timeOut: {Type: Date},
        resetPasswordCode: {Type: String},
        resetPasswordExpires: {Type: Date}
    }, {timestamps: true});

module.exports = mongoose.model('paciente', patientSchema)