require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 3000,
    MONGODB_URI : process.env.MONGODB_URI || 'mongodb://localhost:27017/evaluacion2',
    JWT_SECRET: process.env.JWT_SECRET || 'clave_secreta',
    CLOUDINARY_KEY: process.env.CLOUDINARY_KEY,
    CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET
}