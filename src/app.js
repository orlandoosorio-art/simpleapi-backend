const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { getConnection } = require('./config/db');

dotenv.config();

const app = express();


getConnection();


app.use(cors());
app.use(express.json());


app.use('/api/directores', require('./routes/directorRoutes'));
app.use('/api/generos', require('./routes/generoRoutes'));
app.use('/api/medias', require('./routes/mediaRoutes'));
app.use('/api/productoras', require('./routes/productoraRoutes'));
app.use('/api/tipos', require('./routes/tipoRoutes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

// Al final de src/app.js
module.exports = app;
