const express = require('express');
const sistemaController = require('../controllers/sistemaController');

const router = express.Router();

module.exports = (systemConfig) => {
  router.get('/dados', (req, res) => {
    console.log("INICIOU O PROCESSO!");
    sistemaController.checkAndUpdateStatus(systemConfig);
    res.json({ message: 'Atualizando status do sistema. Verifique novamente em alguns segundos.' });
  });

  return router;
};
