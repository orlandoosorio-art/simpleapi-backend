const Director = require('../models/Director');

const getDirectores = async (req, res) => {
  try {
    const directores = await Director.find();
    res.json(directores);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener directores', error });
  }
};

const createDirector = async (req, res) => {
  try {
    const director = new Director(req.body);
    await director.save();
    res.status(201).json(director);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear director', error });
  }
};

const updateDirector = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.fechaActualizacion = new Date();
    const director = await Director.findByIdAndUpdate(id, req.body, { new: true });
    res.json(director);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar director', error });
  }
};

const deleteDirector = async (req, res) => {
  try {
    const { id } = req.params;
    await Director.findByIdAndDelete(id);
    res.json({ mensaje: 'Director eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar director', error });
  }
};

module.exports = { getDirectores, createDirector, updateDirector, deleteDirector };