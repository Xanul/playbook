const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

// Exercises
console.log('\n1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH')
explorers.forEach((item) => console.log(item.name))

console.log('\n2. Imprime el stack de cada explorer, usa FOR EACH')
explorers.forEach((item) => console.log(item.name, item.stack))

console.log('\n3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP')
const newStackList = explorers.map((item) => item.stack)
console.log('New Stack List:')
console.log(newStackList)

console.log('\n4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
const javascriptExplorers = explorers.filter((item) => item.stack.includes("js"))
console.log(javascriptExplorers)

console.log('\n5. Busca el primer explorer que sea de la CDMX, usa FIND')
console.log(explorers.find((item) => item.city === "CDMX"))

console.log('\n6. Obtén la suma de todos los exercises_completed, usa REDUCE')
const completedExercises = explorers.reduce((acc, obj) => acc + obj.exercises_completed, 0)
console.log(`Completed Exercises: ${completedExercises}`)

console.log('\n7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
console.log(explorers.some((item) => item.missions.frontend.isFinished === true))

console.log('\n8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.')
console.log(explorers.every((item) => item.missions.onboarding.isFinished === true))