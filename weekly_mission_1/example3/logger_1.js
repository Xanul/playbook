/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

/* De esta manera de envia la funcion de manera generica, si se tiene mas de una 
funcion, se exporta la que se encuente mas abajo en el archivo*/

module.exports = (message2) => {
    console.log('Este es el mensaje numero dos: ' + message2)
}

//Este es el mensaje que se mostrara al llamar al archivo
module.exports = (message) => {
    console.log(`info: ${message}`)
  }

