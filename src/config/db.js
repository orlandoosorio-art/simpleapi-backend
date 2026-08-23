require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');


dns.setServers(['8.8.8.8', '8.8.4.4']);

const getConnection = async () => {
  try {
    const url = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/peliculas_db';
    await mongoose.connect(url);
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
};

module.exports = { getConnection };