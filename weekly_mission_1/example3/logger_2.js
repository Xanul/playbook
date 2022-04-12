/*
  Al exportar una función/objeto así:

  > module.exports.verbose

  Estaremos exportando el contenido con el nombre `verbose`

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger.verbose("Heeey!")
*/

// Aqui se le asigna un nombre a la funcion
module.exports.verbose = (message) => {
  console.log(`verbose: ${message}`);
};

module.exports.verbose2 = (message) => {
    console.log("Este es el contenido de verbose2: " + message)
}