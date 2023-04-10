const getCidades = require("../../service/ddd");

async function getCidadesByDdd(ddd) {
  ddd = ddd.toString();

  if (ddd.length !== 2) {
    return JSON.stringify({ error: "DDD incorreto." });
  }

  try {
    const listaDeCidades = await getCidades(ddd);
    const respostaTratada = await trataResposta(listaDeCidades.data);

    return respostaTratada;
  } catch (error) {
    return JSON.stringify({ error: "DDD não existe." });
  }
}

/* Trata a resposta que vem da API
 * Limpamos os dados deixando apenas os nomes das Cidades
 */
function trataResposta(data) {
  const body = {
    estado: {},
    cidades: {},
  };

  // UF do estado DDD
  body.estado = data.state;

  // array com todas as cidades DDD
  body.cidades = data.cities;

  return body;
}

module.exports = getCidadesByDdd;
