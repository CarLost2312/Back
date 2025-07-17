const Personaje = require('../models/personaje');
const personajeCtrl = {};

// Obtener todos los personajes
personajeCtrl.getPersonajes = async (req, res) => {
  const personajes = await Personaje.find();
  res.json(personajes);
};

// Obtener personaje por ID
personajeCtrl.getPersonajeById = async (req, res) => {
  try {
    const personaje = await Personaje.findById(req.params.id);
    res.json(personaje);
  } catch (error) {
    res.status(404).json({ status: '0', msg: 'Personaje no encontrado' });
  }
};

// Crear un nuevo personaje
personajeCtrl.createPersonaje = async (req, res) => {
  const personaje = new Personaje(req.body);
  try {
    await personaje.save();
    res.json({ status: '1', msg: 'Personaje Agregado.' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando operación.' });
  }
};

// Eliminar personaje por ID
personajeCtrl.deletePersonaje = async (req, res) => {
  try {
    await Personaje.deleteOne({ _id: req.params.id });
    res.json({ status: '1', msg: 'Personaje Borrado' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error procesando la operación' });
  }
};





// Modificar personaje por ID
personajeCtrl.updatePersonaje = async (req, res) => {
  try {
    await Personaje.findByIdAndUpdate(req.params.id, req.body);
    res.json({ status: '1', msg: 'Personaje actualizado correctamente' });
  } catch (error) {
    res.status(400).json({ status: '0', msg: 'Error actualizando personaje' });
  }
};



module.exports = personajeCtrl;
