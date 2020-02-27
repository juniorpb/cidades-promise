const getCidades = require('../../service/ddd');

async function getCidadesByDDD(ddd){

    ddd = ddd.toString()
    if (ddd.length !== 2) {
        return JSON.stringify({"erro": "DDD estar incorreto."});
    }

    const listaDeCidades   = await getCidades(ddd)
    const respostaTratada  = await trataResposta(listaDeCidades.data.payload);

    return respostaTratada;
}

/* Trata a resposta que vem da API 
 * Limpamos os dados deixando apenas os nomes das Cidades
 */
function trataResposta(data) {
    const cidades = data.reduce((dadoPuro, linhaCidade) =>{
        return [...dadoPuro, linhaCidade.cidade]

    }, [])

    return cidades;
} 

module.exports = getCidadesByDDD;