const logger = require('./logger')

// Ya se puede usar directamente el objeto instanciado en el módulo logger
logger.log('This is an informational message')
console.log('Numero de veces que se llamo el metodo log: ' + logger.count)

/*
También pueder instanciar uno nuevo de esta manera:
  const customLogger = new logger.constructor('CUSTOM')
  customLogger.log('This is an informational message')
*/

const myLogger = new logger.constructor('MyLogger')
myLogger.log('Este es un mensaje informativo')
myLogger.log('Este es otro mensaje informativo')
console.log('Numero de veces que se llamo el metodo log: ' + myLogger.count)