const mongoose = require('mongoose');
require('dotenv').config();

const URI = process.env.MONGO_URI;

mongoose.connect(URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error al conectar a MongoDB:', err));

module.exports = { mongoose };
