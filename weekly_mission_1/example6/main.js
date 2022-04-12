// Llamas este módulo que modifica el objeto instanciado
require('./patcher')
// Al llamar el módulo en logger.js te dará el objeto modificado
const logger = require('./logger') 

const myLogger = new logger('Rodrigo')
myLogger.customMessage()

// Instanciando un nuevo objeto con la funcion agregada
// const customLogger = new logger.constructor('customLogger')








