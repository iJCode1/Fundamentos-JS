/*
    Cuando trabajamos con arrays podemos utilizar la función .filter
    la cual nos hara un filtrado de nuestro array a partir de una condición dada.
    Este filtrado no afectara al array principal, crear uno nuevo con los valores ya filtrados.
    Estructura de filter.

    array.filter()
*/

// Creando un array

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

let personas = [sacha, alan, martin, dario, vicky, paula]

// Función para determinar las personas que son altas

const esAlta = persona => persona.altura >= 1.80
const esBaja = persona => persona.altura < 1.80

// Hacer filtrado de las personas que son Altas y mostrarlas en consola

const personasAltas = personas.filter(esAlta)
console.log(personasAltas)

const personasBajas = personas.filter(esBaja)
console.log(personasBajas)
