function sumar(numero1, numero2) {
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
        throw new Error('Ambos argumentos deben ser números');
    }
    return numero1 + numero2;
}

function restar(numero1, numero2) {
    return numero1 + numero2;
}

document.querySelector('#sumar').addEventListener('click', () => {
    const numero1 = document.querySelector('#numero1').value;
    const numero2 = document.querySelector('#numero2').value;
    document.querySelector('#resultado').textContent = sumar(numero1, numero2);
});

document.querySelector('#restar').addEventListener('click', () => {
    const numero1 = document.querySelector('#numero1').value;
    const numero2 = document.querySelector('#numero2').value;
    document.querySelector('#resultado').textContent = restar(numero1, numero2);
});