// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
  country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)
const countriesEndsByia = countries7.filter((country) => country.endsWith('k'))
console.log("Ejemplo 7: Paises que terminan en k")
console.log(countriesEndsByia)

// Filter personalizado

const myFilter = countries7.filter((element) => element.length > 6)
console.log("Ejemplo 7: Paises con mas de 6 letras")
console.log(myFilter)