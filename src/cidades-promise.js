const getCidades = require('./service');

async function getCidadesEstado(siglaEstado){
     const response =  await getCidades(siglaEstado)

     return response.data;
    }


module.exports = getCidadesEstado;