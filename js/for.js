/*
    For en JavaScript
    For es un ciclo repetitivo que se encargara de ejecutar una serie de instrucciones 
    a partir de un numero de veces indicado dentro de ()
    Estructura del For:

    for(varible iteradora; condicion; incremento o decremento){
        Bloque de sentencias
    }

    for(let i=0; i<10; i++){
        Bloque de sentencias
    }
*/

var joel = {
    nombre: 'Joel',
    edad: 21,
    colorFav: 'Morado',
    peso: 57
}

const MOSTRAR_SALUDO = 10

const imprimir = ({nombre}) =>{
    for(let i = 1; i<=MOSTRAR_SALUDO; i++){
        console.log(`Hola ${nombre}!`)
    }
}

const DIAS_ANNIO = 365
const INCREMENTO_DECREMENTO = 0.4

const incrementoPeso = persona=> persona.peso+=INCREMENTO_DECREMENTO //Incrementa en 20 el peso actual

const decrementoPeso = persona=> persona.peso-=INCREMENTO_DECREMENTO //Decrementa en 20 el peso actual


console.log(`El peso de ${joel.nombre} al iniciar el año es de ${joel.peso}Kg`)

for(let i=1; i<=DIAS_ANNIO; i++){  
    //debugger : Hace un Debug en JS
    let random = Math.random()
        
    if(random < 0.2){
        incrementoPeso(joel)
    }else if(random < 0.5){
        decrementoPeso(joel)
    }
}

console.log(`El peso final de ${joel.nombre} es de ${joel.peso.toFixed(2)} Kg`)
