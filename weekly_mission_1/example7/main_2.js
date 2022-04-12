// Importa unicamente la funcion log
import { log } from './logger.js'

// Hace uso de la funcion
log('Hello world')

// Importamos unicamente la clase 
import { Logger } from './logger.js'

// Instanciamos un objeto de la clase
const myLogger2 = new Logger('myLogger2')

myLogger2.log("Message from myLogger2")