const axios = require('axios');

async function getCidadesByDdd(ddd) {

    const csvUrl = `http://ddd.pricez.com.br/ddds/${ddd}`
    
    try {
        return await axios.get(csvUrl, { headers: {'Accept': 'application/json'}});
        
    } catch (error) {
        return JSON.stringify({"erro": "Erro ao buscar cidades"});
    }
}

module.exports = getCidadesByDdd;