/*
    .map en los arrays de JavaScript
    Esta es otra de las funciones que podemos aplicar a los arrays en javascript y al igual que
    .filter lo que hace .map sera devolver un array nuevo. Pero debemos tener cuidado ya que 
    podemos alterrar el comportamiento del objeto real.
*/

// Creando objetos y posteriormente un Array

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

// Utilizando .map para modificar el la altura de los objetos del array de metros a centimetros

const transformarACmts = persona =>({
        ...persona,  // Indicamos que regresaremos una copia del arreglo peor modificando solo la clave altura con el nuevo valor
        altura: persona.altura * 100 
})

var alturaCMTS = personas.map(transformarACmts)