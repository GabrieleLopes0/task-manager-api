require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false } // Importante para Railway
});

client.connect()
  .then(() => {
    console.log('Conexão bem-sucedida!');
    return client.query('SELECT NOW()');
  })
  .then((res) => {
    console.log('Hora do Servidor:', res.rows[0].now);
    client.end();
  })
  .catch((err) => {
    console.error('Erro ao conectar:', err);
    client.end();
  });
