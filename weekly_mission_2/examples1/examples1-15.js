//Ejemplo 15: Uso de sort para ordenar elementos
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log("Ejemplo 15: Elementos ordernados usando SORT")
// console.log(products.sort())

// El orden se realiza alfabeticamente

const numbers = [154, 33, 2]

console.log(numbers)
numbers.sort((a,b) => {
    console.log(a,b)
    console.log(numbers)
    if (a < b) return -1
    if (a > b) return 1
    return 0
})

console.log(numbers)