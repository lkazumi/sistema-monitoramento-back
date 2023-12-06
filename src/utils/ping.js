const axios = require('axios');

const pingSystem = async (url) => {
  try {
    const response = await axios.get(url);
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

module.exports = { pingSystem };
