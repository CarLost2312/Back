const express = require('express');
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../config/cloudinary.config');

const router = express.Router();

// Configurar almacenamiento
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'personajes', // nombre de carpeta en Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg', 'webp'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  }
});

const upload = multer({ storage });

// Endpoint para subir imagen
router.post('/', upload.single('foto'), (req, res) => {
  res.json({ url: req.file.path }); // la URL pública de la imagen
});

module.exports = router;
