const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./data.db');

const createTable = () => {
  db.run(`CREATE TABLE IF NOT EXISTS sistemas (
      id TEXT PRIMARY KEY,
      sistema TEXT,
      status TEXT
  )`);
};

const getSystemById = (id, callback) => {
  db.get('SELECT * FROM sistemas WHERE id = ?', [id], callback);
};

const updateSystemStatus = (id, status) => {
  db.run('UPDATE sistemas SET status = ? WHERE id = ?', [status, id]);
};

const insertSystem = (id, sistema, status) => {
  db.run('INSERT INTO sistemas (id, sistema, status) VALUES (?, ?, ?)', [id, sistema, status]);
};

const getAllSystems = (callback) => {
  db.all('SELECT id, sistema, status FROM sistemas', callback);
};

module.exports = {
  createTable,
  getSystemById,
  updateSystemStatus,
  insertSystem,
  getAllSystems,
};
