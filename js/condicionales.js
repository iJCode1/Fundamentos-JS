/*
    Condicionales en JavaScript!
    Un condicional nos permite indicar cuando se ejecuta un codigo a partir
    de una condicion que debe cumplir.
*/

var joel = {
    nombre: 'Joel',
    edad: 21,
    ingeniero: true,
    diseñador_grafico: false,
    cubero: true, 
    administrador: false,
    estudiante: true
}

function ImprimirProfesiones(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} años y es: `)
    
    // Haciendo uso de condicionales

    if(persona.ingeniero){
        console.log("Ingeniero")
    }else{
        console.log("No es Ingeniero")
    }

    if(persona.diseñador_grafico){
        console.log("Diseñador Grafico")
    }else{
        console.log("No es Diseñador Grafico")
    }

    if(persona.cubero){
        console.log("Cubero")
    }

    if(persona.administrador){
        console.log("Administrador")
    }

    if(persona.estudiante){
        console.log("Estudiante")
    }
}


/*
    Reto: Mostrar si la persona es mayor o menor de edad
*/

function ImprimirMenorMayorDeEdad(persona) {
    if(persona.edad >= 18){
        console.log(`${persona.nombre} es mayor de edad con: ${persona.edad} años`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad por que tiene ${persona.edad} años`)
    }
}