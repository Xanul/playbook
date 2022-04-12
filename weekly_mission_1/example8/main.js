// Importando la clase MyLogger

// Al importar la clase como default, se le puede asignar un nombre distinto, en este caso MyLogger
import MyLogger from './logger.js'

const logger = new MyLogger('info')
logger.log('Hello World')
console.log(logger.name)