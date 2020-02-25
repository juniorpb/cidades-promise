const axios = require('axios');

async function getCidadesByEstado(siglaEstado) {
    
    const url = `http://educacao.dadosabertosbr.com/api/cidades/${siglaEstado}`;
    let response = "";

    try {
        response = await axios.get(url);
        
    } catch (error) {
        response = "Erro ao buscar cidades";
    }
    console.log(response.data);
    // return response;
}

module.exports = getCidadesByEstado;