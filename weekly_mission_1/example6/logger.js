// Se define la clase
class Logger {
    constructor (name) {
      this.count = 0
      this.name = name
    }
  
    log (message) {
      this.count++
      console.log('[' + this.name + '] ' + message)
    }
  }
  
  // Se exporta un objeto instanciado de la clase Logger
  // module.exports = new Logger('Default Class') // Nuevo objeto instanciado

  // Se exporta la clase completa para poder ser intanciada despues
  module.exports.Logger = Logger // Clase