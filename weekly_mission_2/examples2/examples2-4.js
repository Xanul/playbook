// Ejemplo 4: Métodos en los objetos
class Repository {
    constructor(name, author, language, stars){
     this.name = name
     this.author = author
     this.language = language
     this.stars = stars
    }
  
    getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
      return `Repository ${this.name} has ${this.stars} stars`
    }
    getLanguages(){
        return `The languages used are: ${this.language}`
    }
  }
  console.log("Ejemplo 4: Métodos en los objetos")
  const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
//   console.log(myRepo.getInfo())

  const myRepo2 = new Repository("My Project", "Rodrigo", ["Python", "PHP"], 20)
//   console.log(myRepo)
//   console.log(myRepo2)
console.log(myRepo2.getInfo())
console.log(myRepo2.getLanguages())