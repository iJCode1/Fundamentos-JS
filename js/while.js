/*
    Bucle While en JavaScript

    El Bucle While es un tipo de estructura repetitiva que se va a ejecutar mientras se cumpla una
    condición que indicaremos dentro de parentesis.
    Tiene la siguiente estructura:
    while(condicion){
        Bloque de Instrucciones
    }
*/

/*
    Ejemplo: 
    Determinar cuantos dias pasara hasta que una persona logre bajar 3kg de su peso inicial
*/

var joel = {
    nombre: 'Joel',
    edad: 21,
    peso: 65
}

const META = joel.peso - 3
const INCREMENTO_DECREMENTO = 0.4
let dias = 0
const incrementaPeso = (persona) => persona.peso += INCREMENTO_DECREMENTO
const decrementaPeso = (persona) => persona.peso -= INCREMENTO_DECREMENTO
const comeMucho = ()=> Math.random() < 0.3 // Si el numero random es menor a .3 devuelve true si no, devuelve false
const haceEjercicio = ()=> Math.random() < 0.5 // Si el numero random es menor a 0.5 devuelve true si no, devuelve false

while(joel.peso > META){

    if(comeMucho()){
        incrementaPeso(joel)
    }
    if(haceEjercicio()){
        decrementaPeso(joel)
    }

    dias++
}

console.log(`Pasarón ${dias} dias hasta que ${joel.nombre} bajo 3Kg.`)
console.log(`Peso actual: ${joel.peso}`)
