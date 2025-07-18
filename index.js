require('dotenv').config();

const express = require('express');
const cors = require('cors');
require('./database'); // Asegurate que este conecta correctamente

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/personaje', require('./routes/personaje.route.js'));

// Usar el puerto que Render asigna
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('✅ Servidor iniciado en el puerto', PORT);
});
