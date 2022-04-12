/*
 * Ten en cuenta:
 *    - require('./logger') te dará el objeto creado
 *    - require('./logger').Logger te regresará la clase
 *
 * En este caso estamos agregando una función más al objeto instanciado, no a la clase.
 * */

// Agregando una funcion a la clase
require('./logger').Logger.customMessage = function () {
    console.log('This is a new functionality')
}


