import * as loggerModule from './logger.js'

// Imprime el objeto completo con todo lo importado
// console.log(loggerModule)

// Usamos la funcion importada
// loggerModule.log('Saludos')

// Creamos un objeto usando la clase importada
const myLogger = new loggerModule.Logger('myNewObject') 

myLogger.log('Message from class')

