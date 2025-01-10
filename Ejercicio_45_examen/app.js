const TIEMPO_RESPUESTA = 5;
const TIEMPO_PASO = 1000;

let cronometro;

let idEnCurso = '#portada';
let idSiguiente = '#pregunta1';
let idBorrar = '#portada';

/* Mejorar esto con foreach y addeventlistener y usar contadores para las preguntas */
document.querySelector('#b-comenzar').addEventListener('click', () => {
    idEnCurso = '#pregunta1';
    mostrarPagina('#pregunta1', '#portada');
});

document.querySelector('#b-pregunta1').addEventListener('click', () => {
    idEnCurso = '#pregunta2';
    mostrarPagina('#pregunta2', '#pregunta1');
});

document.querySelector('#b-pregunta2').addEventListener('click', () => {
    idEnCurso = '#pregunta3';
    mostrarPagina('#pregunta3', '#pregunta2');
});

document.querySelector('#b-pregunta3').addEventListener('click', () => {
    mostrarPagina('#resultado', '#pregunta3');
    document.querySelector('#tiempo').style.display = 'none';
});

function iniciarCronometro() {
    let tiempo = TIEMPO_RESPUESTA;

    cronometro = setInterval(() => {
        document.querySelector('#tiempoSegundos').innerHTML = tiempo + " segundos";
        tiempo--;

        if (tiempo < 0) {
            clearInterval(cronometro);

            /* Mejorar esto con contadores por si hay muchas preguntas hacerlo más sencillo */
            idBorrar = idEnCurso;
            if (idEnCurso === '#pregunta1') {
                idEnCurso = '#pregunta2';
            } else if (idEnCurso === '#pregunta2') {
                idEnCurso = '#pregunta3';
            } else if (idEnCurso === '#pregunta3') {
                idEnCurso = '#resultado';
            }
            mostrarPagina(idEnCurso, idBorrar);
        }
    }, TIEMPO_PASO);
}

function mostrarPagina(idMostrar, idOcultar) {
    document.querySelector(idOcultar).style.left = '-100%';
    document.querySelector(idMostrar).style.left = '0px';
    clearInterval(cronometro);
    iniciarCronometro();

    if (idMostrar === '#resultado') document.querySelector('#tiempo').style.display = 'none';
}
