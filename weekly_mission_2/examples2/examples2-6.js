// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
    constructor(name, age, stack, exercises_completed){
     this.name = name
     this.age = age
     this.stack = stack
     this.exercises_completed = exercises_completed
     this.exercises_todo = 99
    }
  
    // Podemos acceder a los atributos de esta clase
    get getExercisesCompleted() {
          return this.exercises_completed
    }
  }
  
  console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
  const woopa = new Ajolonauta("Woopa", 1, [], 2)
  console.log(woopa.getExercisesCompleted)

  const woopa2 = new Ajolonauta("Aceituna", 3, ["PHP", "JavaScript"], 5)
  console.log(woopa2.getExercisesCompleted)
