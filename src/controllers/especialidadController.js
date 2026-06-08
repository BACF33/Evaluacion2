const Expediente = require('../models/expediente.js')

const create = async(req, res) =>
{
    try
    {
        const obje = new Expediente(req.body);
        await obje.save();
        await obje.populate('patient_id', 'name lastName email')
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
        const obje = await Expediente.find().populate;
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
        const obje = await Expediente.findByIdAndUpdate(req.params.id, req.body, {new: True}).populate()
        if(!obje) 
            {return res.status(404).json({message: 'No encontrado'})};
        res.json({message: 'Expediente actualizado', obje})
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
        const obje = await Expediente.findByIdAndDelete(req.params.id)
        if(!obje) 
            {return res.status(404).json({message: 'No encontrado'})};
        res.json({message: 'Expediente actualizado', obje})
    }
    catch (error)
    {
        res.status(500).json({message: 'Error'})
    }
}

module.export = {create, getAll, update, remove}