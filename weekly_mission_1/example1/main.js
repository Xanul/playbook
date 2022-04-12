let myCar = new Object(); // Creación de un objeto
myCar.make = 'Ford'; // Guardando un valor dentro del objeto creado
myCar.model = 'Mustang';
myCar.year = 1969;

// console.log(myCar)

const myModule = (()=> {

    // Variables de contexto local
    const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto"
    const privateBar = [1,2,3,4]
    const baz = "Soy un valor que va a ser expuesto"

    // Variable para guardar las variables locales
    const exported = {
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor público",
   	    publicBaz: baz
    }

    // Retorna las variables que definimos en nuestro objeto para exportat
    return exported

})

// Imprimimos el resultado en consola, en donde unicamnete apareceran los elementos del objeto exported
console.log(myModule())
