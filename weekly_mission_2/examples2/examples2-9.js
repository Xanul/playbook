// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack) {
    this.name = name;
    this.mainLang = mainLang;
    this.stack = stack;
  }

  get getName() {
    return this.name;
  }

  addStack(stack){
    this.stack.push(stack)
  }

  sendMessage(msj){
    console.log(`My name is ${this.name} and my message is ${msj}`)
  }

}

console.log("Ejemplo  9: Herencia entre dos clases");
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"]);
console.log(carloDev);

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer {}
const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir","groovy","lisp",]);
// console.log(carloLaunchXDev);
// console.log(carloLaunchXDev.getName); // getter de la clase padre rehusada en la clase hija


class clasePrueba extends Developer {
  constructor(name, mainLang, stack, age){
    super(name, mainLang, stack)
    this.age = age
  }

  sendMessage2(msj2, msjalt){
    super.sendMessage(msj2)
    console.log(`This is the second message: ${msjalt}`)
  }

}

const objetoPrueba = new clasePrueba("Rodrigo", "Java", ["HTML", "CSS"], 33);
objetoPrueba.addStack("Go")
console.log(objetoPrueba);
objetoPrueba.sendMessage2("Greetings!", "From Merida!")
