const Tipo = require('../models/Tipo');

const getTipos = async (req, res) => {
  try {
    const tipos = await Tipo.find();
    res.json(tipos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener tipos', error });
  }
};

const createTipo = async (req, res) => {
  try {
    const tipo = new Tipo(req.body);
    await tipo.save();
    res.status(201).json(tipo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear tipo', error });
  }
};

const updateTipo = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.fechaActualizacion = new Date();
    const tipo = await Tipo.findByIdAndUpdate(id, req.body, { new: true });
    res.json(tipo);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar tipo', error });
  }
};

const deleteTipo = async (req, res) => {
  try {
    const { id } = req.params;
    await Tipo.findByIdAndDelete(id);
    res.json({ mensaje: 'Tipo eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar tipo', error });
  }
};

module.exports = { getTipos, createTipo, updateTipo, deleteTipo };