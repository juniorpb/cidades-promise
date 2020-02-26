const getCidades = require('./service');

async function getCidadesEstado(siglaEstado){

    if (siglaEstado.length !== 2) {
        return JSON.stringify({"erro": "Sigla do estado estar incorreta"});
    }

    const listaDeCidades   = await getCidades(siglaEstado)
    const respostaTratada  = await trataResposta(listaDeCidades);

    return respostaTratada;
}

/* Trata a resposta que vem da API do INEP
 * Limpamos os dados deixando apenas os nomes das Cidades
 */
function trataResposta(res) {
    const cidades = res.data.reduce((dadoPuro, linhaCidade) =>{
        const cidade = linhaCidade.split(":")
        return [...dadoPuro, cidade[1]]

    }, [])

    return cidades;
} 

module.exports = getCidadesEstado;