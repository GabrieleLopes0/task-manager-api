require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Erro ao conectar no banco de dados:', err.stack);
  }
  console.log('Conectado ao banco de dados com sucesso!');
  release();
});

module.exports = pool;
