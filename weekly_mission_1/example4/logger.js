class Logger {
  constructor(name) {
    // this es una variable para referenciar el valor del contexto local de esta clase
    this.name = name; // Estas variables se le conocen como atributos
  }

  // metodo
  // this.name es la variavle que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar el metodo

  info(message) {
      console.log(`Nombre del objeto: ${this.name} info: ${message}`)
  }

  // metodo
  verbose(message){
      console.log(`Nombre del objeto: ${this.name} verbose: ${message}`)
  }
}

module.exports = Logger