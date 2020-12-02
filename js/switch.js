/*
    Condicional Multiple: Switch en JavaScript.
    Este tipo de condicional es mejor practica al tener muchos casos que podrian ser tratados 
    en condiciones con puro IF pero tendriamos un codigo muy largo y no tan eficiente.

    Estructura de un Switch:

    switch(variable a evaluar){
        case n:
            bloque de instrucciones
            break
        case w: 
            bloque de instrucciones
            break
        default:
            //Caso por default si no cumple los casos anteriores
            //Ya no es necesario colocar el break
    }

    La palabra break es el punto de cierre de un case por lo que es importante indicarlo
    de caso contrario entraria al caso siguiente ya que iria en busca de un break cuando
    se cumplio un caso!
*/

// Objeto para alojar los horoscopos
var horoscopos = {
    aries: 'Es probable que hoy te apetezca presumir de tus talentos con un ser querido. A lo mejor quieres sorprenderle con un talento del que no sabe nada. No te cortes; si tienes un don, aprovéchalo. Es muy probable que los demás se diviertan mucho con tu actuación.',
    tauro: 'Recompénsate por todas las cosas maravillosas que has estado haciendo por ti y los demás. Mereces ser tratada como una reina: asegúrate de tratarte como tal. Muchas veces te vuelves tan crítica de las cosas que haces que terminas castigándote sin necesidad. Agasájate por ser buena persona en vez de criticarte por ser mala. Sin embargo, en todo momento recuerda que eres perfecta tal como eres.',
    geminis: 'Puede que hoy aparezcas ante la atención pública debido a alguna actividad de grupo. Quizá debas hablar en público o moderar un debate. Hoy tu mente será rápida y tu inteligencia aguda, tendrás mucho que decir y la gente querrá escuchar. Te lo vas a pasar en grande, pero también podrías cansarte, así que no te fuerces demasiado. ¡Que tengas un buen día!',
    cancer: 'Hoy te resultará dificultoso concentrarte. Soñarás con esa persona especial en tu vida, fantaseando acerca de pasar tiempo juntos. Invítala a almorzar, si es que puedes. De lo contrario, planea una cena romántica juntos y programa el tiempo para estar solos. Si estás soltero, podrías conocer a alguien con muchas posibilidades. ¡No seas tan tímido! Trata de ser más seguro.',
    leo: '¿Te dedicas a la literatura o a la docencia? Si es así, descubrirás que hoy no es un día productivo. Tus habilidades verbales parecen bloqueadas. Quizás deberías concentrarte en el aspecto visual. Si eres docente, puedes exhibir un video o diapositivas a tus alumnos. Si te dedicas a escribir, concéntrate en los gráficos e ilustraciones. La comunicación quedará para otro día. ¡Diviértete!',
    virgo: 'Tus actos de hoy pueden encontrar resistencia, de modo que ten cuidado. Hoy no es un buen día para buscar pelea; de hecho, la atmósfera general promueve la armonía y la paz. Si intentas alterar este equilibrio, serás como el malo de la película. Intenta no irritarte por la necesidad de atención de los demás; puede que su actitud te moleste, pero no tienes derecho a juzgar a los demás.',
    libra: 'Hoy pensarás en las aventuras del pasado. Estarás sentimental, reflexionando en tus tiempos de estudiante y en tus amigos. Los planetas despertarán los sentimientos de nostalgia. Te encontrarás extrañando los días pasados. Hasta querrás ver alguna fotos viejas. O llamarás a algún antiguo compinche. Si ambos han perdido el contacto, será divertido reencontrarse.',
    escorpio: 'En tu interior se está acumulando una enorme energía física. Ten cuidado de no liberar esta fuerza increíble como una discusión acalorada con alguien a quien amas de verdad. Quizás sientas que de pronto todo se derrumba sobre ti y necesitas encontrar una salida con desesperación. No te quedes en casa. Ponte un par de zapatillas y sal a correr. Encuentra un modo de liberar esta tensión.',
    sagitario: 'Los sueños y visiones que has tenido a través de la meditación te inspirarán hacia la creatividad. Hoy mucho de tu tiempo lo dedicarás a la escritura, pintura o música. Mientras trabajes, posiblemente quieras estar sola, pero a la noche probablemente asistas a alguna reunión social o quizás simplemente te reúnas con algunos amigos. Sin embargo, mantendrás las visiones en tu mente durante todo el día.',
    capricornio: 'Sí, es tu turno de tomar la iniciativa. No pierdas más tiempo esperando a que otra persona se haga cargo; si no te gusta cómo van las cosas en cualquier situación, habla y exige cambios. Tienes un punto de vista muy fresco y nuevo, muy sanador y en cierto modo muy revolucionario. Valida este punto de vista y exprésalo a quienes te rodean.',
    acuario: 'Podrías recibir una llamada sorprendente de alguien con quien no has hablado hace tiempo. Es posible que tu mente se sobrecargue por un exceso de información en asuntos metafísicos, espirituales o artísticos en libros, revistas y documentales. Querrás leer más, pero podrías cargarte la vista y provocarte una jaqueca. No fuerces la máquina; deja algo para mañana.',
    piscis: 'Hoy no debes confiar en las primeras impresiones. Existen elementos inesperados ocultos bajo la superficie de las cosas que al principio podrías pasar por alto, pero que deberás descubrir en algún momento. Quizás sientas la tentación de tratar muy por encima ciertas cuestiones que requieren una comprensión profunda. Abre bien los ojos para no perder detalle de lo que ocurre a tu alrededor.'
}


// Pedir al usuario su Horozcopo y mostrarle lo que dice dicho horozcopo el dia de hoy.

var horozcopoU = prompt('Buen dia Querido Usuario, podria indicarme su Horozcopo')

switch(horozcopoU.toLowerCase()){
    case 'aries':
        console.log(horoscopos.aries)
        break
    case 'tauro':
        console.log(horoscopos.tauro)
        break
    case 'geminis':
        console.log(horoscopos.geminis)
        break

    case 'cancer':
        console.log(horoscopos.cancer)
        break

    case 'leo':
        console.log(horoscopos.leo)
        break

    case 'virgo':
        console.log(horoscopos.virgo)
        break

    case 'libra':
        console.log(horoscopos.libra)
        break

    case 'escorpio':
        console.log(horoscopos.escorpio)
        break

    case 'sagitario':
        console.log(horoscopos.sagitario)
        break

    case 'capricornio':
        console.log(horoscopos.capricornio)
        break

    case 'acuario':
        console.log(horoscopos.acuario)
        break

    case 'piscis':
        console.log(horoscopos.piscis)
        break
    
    default:
        console.log('Ingrese un horozcopo corecto')
}