function sumar(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        throw new Error('Ambos argumentos deben ser números');
    }
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 - numero2;
}

const numero1 = document.querySelector('#numero1').value;
const numero2 = document.querySelector('#numero2').value;

/*
const numero1 = parseInt(document.querySelector('#numero1').value);
const numero2 = parseInt(document.querySelector('#numero2').value);
*/

document.querySelector('#sumar').addEventListener('click', () => {
    try {
        document.querySelector('#resultado').textContent = sumar(numero1, numero2);
    } catch (error) {
        document.querySelector('#resultado').textContent = error.message;
    }
});

document.querySelector('#restar').addEventListener('click', () => { 
    document.querySelector('#resultado').textContent = restar(numero1, numero2);
});