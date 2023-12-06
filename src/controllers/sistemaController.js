const database = require('../db/database');
const ping = require('../utils/ping');

const checkAndUpdateStatus = async (systemConfig) => {
    console.log("checkAndUpdateStatus");
  const { id, sistema, url } = systemConfig;

  try {
    const isSystemActive = await ping.pingSystem(url);
    const status = isSystemActive ? 'ativo' : 'inativo';

    console.log("Verifica se já existe no banco de dados");
    // Verifica se já existe no banco de dados
    database.getSystemById(id, (err, row) => {
      if (err) {
        console.error(err.message);
      }

      if (row) {
        console.log("Atualiza o status se já existir");
        // Atualiza o status se já existir
        database.updateSystemStatus(id, status);
      } else {
        console.log("Insere um novo registro se não existir");
        // Insere um novo registro se não existir
        database.insertSystem(id, sistema, status);
      }
    });
  } catch (error) {
    console.error('Erro ao fazer ping:', error.message);
  }
};

module.exports = { checkAndUpdateStatus };
