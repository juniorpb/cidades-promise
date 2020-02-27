/* 
 * Cada novo module deve ser exportado conforme o nome 
 * da função que será utilizada
 * 
 */

module.exports = {
    getCidadesByEstado: require('./controler/siglaEstado'),
    getCidadesByDddd:   require('./controler/ddd')
};
