const Media = require('../models/Media');

const getMedias = async (req, res) => {
  try {
    const medias = await Media.find()
      .populate('generoPrincipal', 'nombre')
      .populate('directorPrincipal', 'nombre')
      .populate('productora', 'nombre')
      .populate('tipo', 'nombre');
    res.json(medias);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al obtener películas y series', error });
  }
};

const createMedia = async (req, res) => {
  try {
    const media = new Media(req.body);
    await media.save();
    res.status(201).json(media);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al crear la película o serie', error });
  }
};

const updateMedia = async (req, res) => {
  try {
    const { id } = req.params;
    req.body.fechaActualizacion = new Date();
    const media = await Media.findByIdAndUpdate(id, req.body, { new: true });
    res.json(media);
  } catch (error) {
    res.status(400).json({ mensaje: 'Error al actualizar', error });
  }
};

const deleteMedia = async (req, res) => {
  try {
    const { id } = req.params;
    await Media.findByIdAndDelete(id);
    res.json({ mensaje: 'Registro eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al eliminar', error });
  }
};

module.exports = { getMedias, createMedia, updateMedia, deleteMedia };