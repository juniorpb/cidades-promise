/* 
 * Cada novo module deve ser exportado conforme o nome 
 * da função que será utilizada
 * 
 */

module.exports = {
    getCitiesByState: require('./controler/state'),
    getCitiesByDdd:   require('./controler/ddd')
};
