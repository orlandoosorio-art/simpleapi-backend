const Genero = require('../models/Genero');

const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener géneros', error });
  }
};

const createGenero = async (req, res) => {
  try {
    const genero = new Genero(req.body);
    await genero.save();
    res.status(201).json(genero);
  } catch (error) {
   res.status(400).json({ mensaje: 'Error al crear género', error: error.message });
  }
};

const updateGenero = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.fechaActualizacion = new Date();
    const genero = await Genero.findByIdAndUpdate(id, req.body, { new: true });
    res.json(genero);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar género', error });
  }
};

const deleteGenero = async (req, res) => {
  try {
    const { id } = req.params;
    await Genero.findByIdAndDelete(id);
    res.json({ mensaje: 'Género eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar género', error });
  }
};

module.exports = { getGeneros, createGenero, updateGenero, deleteGenero };