const mongoose = require('mongoose');
const {MONGODB_URI} = require('./config.js')

const connectDB = async() =>
{
    try
    {
        await mongoose.connect(MONGODB_URI);
        console.log('Conexion a mongoDB')
    }
    catch
    {
        console.error('Error');
        process.emitWarning(1)
    }
}

module.exports = connectDB