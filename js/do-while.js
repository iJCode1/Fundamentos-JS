/*
    Bucle DoWhile en JavaScript
    Este tipo de bucle es muy similar al bucle while
    Pero la diferencia es que do-while minimo se ejecutara 1 vez aunque la condición no se cumpla
    ya que primero realizar el bloque de código y luego verifica la condición.
    Estructura de un do-while:
    do{
        Sentencias de Código
    }while(condición)
*/

// Determinar cuantas veces una persona se asoma para ver si llueve.
const llueve = () => Math.random() < 0.25 // Devolvera True si el numero random es menor a 0.25, si no devolvera false
let contador = 0
do{
    contador++ // Se incrementa en 1 el contador
}while(!llueve()) // Se repitira mientras que llueva, cuando ya no llueva este saldra del do-while

let mostrarContador = contador === 1 ? `Llovio ${contador} dia` : `Llovio ${contador} dias`

console.log(mostrarContador)