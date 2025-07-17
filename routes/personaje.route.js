const express = require('express');
const router = express.Router();
const personajeCtrl = require('../controllers/personaje.controller');

// Rutas correctas
router.get('/', personajeCtrl.getPersonajes);
router.post('/', personajeCtrl.createPersonaje);
router.get('/:id', personajeCtrl.getPersonajeById);
router.delete('/:id', personajeCtrl.deletePersonaje);
router.put('/:id', personajeCtrl.updatePersonaje);


module.exports = router;
