/*
    Funciones en Js con retorno de valores
*/

// Imprimir si una persona es mayor o menor de edad

const MAYORIA_DE_EDAD = 18

var joel = {
    nombre: 'Joel',
    edad: 21
}

var julieta = {
    nombre: 'Julieta',
    edad: 17
}

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}

function imprimirMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}