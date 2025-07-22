require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('./database');

const app = express();
app.use(express.json());
app.use('/api/upload', require('./routes/upload.route'));
app.use(cors());
app.use('/api/personaje', require('./routes/personaje.route.js'));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('✅ Servidor iniciado en el puerto', PORT);
});
