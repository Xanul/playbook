// Ejemplo 16: Ordenando una lista de objetos
const users = [
    { name: 'C', age: 150 },
    { name: 'B', age: 50 },
    { name: 'A', age: 100 },
    { name: 'D', age: 22 },
  ]
  
//   users.sort((a, b) => { // podemos invocar una función
//     if (a.age < b.age) return -1
//     if (a.age > b.age) return 1
//     return 0
//   })
  
  console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
  
  users.sort((a,b) => {
      console.log(a, b)
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
    
console.log(users) // sorted ascending
  // Si A es MENOR que B significa que va antes en el arreglo por lo que se retorna un -1
  // Si A es MAYOR que B significa que va despues en el arreglo, por lo que se retorna un 1
  // Si A es IGUAL que B entonces no se realizan cambios