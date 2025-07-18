require('dotenv').config(); // Cargar variables de entorno

const express = require('express');
const cors = require('cors');
const { mongoose } = require('./database');

const app = express();

// Middlewares
app.use(express.json());

// Configurar CORS para permitir cualquier origen (útil para Postman y Render)
app.use(cors());

// Rutas
app.use('/api/personaje', require('./routes/personaje.route.js'));

// Puerto
app.set('port', process.env.PORT || 3000);

// Iniciar servidor
app.listen(app.get('port'), () => {
  console.log('✅ Servidor iniciado en el puerto', app.get('port'));
});
