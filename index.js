require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database'); // conexión a MongoDB

const app = express();

app.use(express.json());
app.use(cors());

// Rutas
app.use('/api/personaje', require('./routes/personaje.route.js'));

// Puerto SOLO desde Render
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log('✅ Servidor iniciado en el puerto', PORT);
});
