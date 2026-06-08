const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../config.js');

const verifyToken = (req, res, next) =>
{
    const token = req
    if(!token) return res.status(401).json({messagee: 'Token requerido'});
    try
    {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch (error)
    {
        return res.status(401).json({message: 'Invalido'});
    }
}

module.exports = {verifyToken}