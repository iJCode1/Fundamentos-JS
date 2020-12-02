/*
    Arrays en Js.
    Los array son un tipo de colección que nos permitiran almacenar una colección de valores de 
    tipos iguales e incluso de diferentes tipos.
    Podriamos hacer una mezcla de valores por ejemplo: String, Number, Function, Object, Boolean...

    Estructura de un array

    var nombreArray = [
        valores, separados, por, coma
    ]
*/

// Declaramos objetos para posteriormente almacenarlos en un array

var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

// Creando un array
let personas = [sacha, alan, martin, dario, vicky, paula]

// Imprimiendo un array
for(let i=0; i<personas.length; i++){
    let persona = personas[i];
    console.log(`${persona.nombre} tiene una altura de: ${persona.altura} mts`)
}

// Array de Numeros

var numeros = [
    1, 2, 4, 8, 16, 32
]

// Imprimiendo un Array de Numeros

for(let i=0; i<numeros.length; i++){
    console.log(numeros[i])
}

var personas2 = [
    {name: 'Joel', edad: 21},
    {name: 'Julieta', edad: 19},
    {name: 'Gabriela', edad: 24}
]

for(let i=0; i<personas2.length; i++){
    console.log(`${personas2[i].name} tiene una edad de ${personas2[i].edad} años`)
}