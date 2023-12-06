const express = require('express');
const sistemaRoutes = require('./routes/sistemaRoutes');
const database = require('./db/database');
const systems = require('./config/systems.json');

const app = express();
const port = process.env.PORT || 3000;

console.log("Certifica-se de que a tabela exista");
database.createTable(); // Certifica-se de que a tabela exista

console.log("Itera sobre cada sistema no arquivo JSON");
// Itera sobre cada sistema no arquivo JSON
systems.forEach((systemConfig) => {
  const { id } = systemConfig;

  console.log("Configuração do sistema");
  // Configuração do sistema
  app.use(`/${id}`, sistemaRoutes(systemConfig));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
