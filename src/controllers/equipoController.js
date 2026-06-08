const Expediente = require('../models/equipo.js')

const create = async(req, res) =>
{
    try
    {
        const obje = new Equipo(req.body);
        await obje.save();
        await obje.populate()
        res.status(201).json({message: 'Creado'})
    }
    catch (error)
    {
        res.status(500).json({message: 'Error'})
    }
}

const getAll = async(req, res) =>
{
    try
    {
        const obje = await Equipo.find().populate;
        res.json(obje)
        res.status(201).json({message: 'Creado'})
    }
    catch (error)
    {
        res.status(500).json({message: 'Error'})
    }
}

const update = async(req, res) =>
{
    try
    {
        const obje = await Equipo.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate()
        if(!obje) 
            {return res.status(404).json({message: 'No encontrado'})};
        res.json({message: 'Equipo actualizado', obje})
    }
    catch (error)
    {
        res.status(500).json({message: 'Error'})
    }
}

const remove = async(req, res) =>
{
    try
    {
        const obje = await Equipo.findByIdAndDelete(req.params.id)
        if(!obje) 
            {return res.status(404).json({message: 'No encontrado'})};
        res.json({message: 'Expediente actualizado', obje})
    }
    catch (error)
    {
        res.status(500).json({message: 'Error'})
    }
}

module.exports = {create, getAll, update, remove}