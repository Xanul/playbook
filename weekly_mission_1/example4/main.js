const Logger = require('./logger') // Invocas el modulo que contiene la clase

// Creacion de un objeto
const dbLogger = new Logger('DB') // Creas un objeto nuevo, esto llama por default el constructor de la clase
// Invocacion del metodo
dbLogger.info('Este mensaje se mando por el metodo info')

// Creacion de otro objeto
const accessLogger = new Logger ('ACCESS')
accessLogger.verbose('Este mensaje se mando por el metodo verbose')

// Creacion de objeto personal
const miObjeto = new Logger ('miObjeto')
miObjeto.info('Este mensaje es de mi objeto')
miObjeto.verbose('Este mensaje tambien es de mi objeto')