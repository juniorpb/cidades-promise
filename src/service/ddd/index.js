const axios = require("axios");

async function getCidadesByDdd(ddd) {
  const csvUrl = `https://brasilapi.com.br/api/ddd/v1/${ddd}`;

  try {
    return await axios.get(csvUrl, { headers: { Accept: "application/json" } });
  } catch (error) {
    return JSON.stringify({ erro: "Erro ao buscar cidades" });
  }
}

module.exports = getCidadesByDdd;
