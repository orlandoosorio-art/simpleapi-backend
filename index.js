require('dotenv').config();
const app = require('./src/app');
const { getConnection } = require('./src/config/db');

// Iniciar conexión a base de datos
getConnection();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});