// node main.js

/* Se crea la variable logger y se le asigna toda la informacion 
 que se encuentra en el archivo ./logger ahora podemos acceder
 a las funciones haciendo referencia a la variable logger */
const logger = require('./logger')

/* Se hace uso de las funciones info y verbose que estan definidas
en el archivo logger y por consiguiente en la variable logger*/
logger.info('Este mensaje se paso por info')
logger.verbose('Este mensaje de paso por verbose')