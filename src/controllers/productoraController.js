const Productora = require('../models/Productora');

const getProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener productoras', error });
  }
};

const createProductora = async (req, res) => {
  try {
    const productora = new Productora(req.body);
    await productora.save();
    res.status(201).json(productora);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear productora', error });
  }
};

const updateProductora = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.fechaActualizacion = new Date();
    const productora = await Productora.findByIdAndUpdate(id, req.body, { new: true });
    res.json(productora);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar productora', error });
  }
};

const deleteProductora = async (req, res) => {
  try {
    const { id } = req.params;
    await Productora.findByIdAndDelete(id);
    res.json({ mensaje: 'Productora eliminada correctamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar productora', error });
  }
};

module.exports = { getProductoras, createProductora, updateProductora, deleteProductora };