function adicionarCaracter(caracter) {
    const display = document.querySelector('.display');
    display.value += caracter;
}


function limparEcra() {
    document.querySelector('.display').value = '';
}

function inverte() {
    const display = document.querySelector('.display');
    if (display.value) {
        display.value = String(parseFloat(display.value) * -1);
    }
}


function calcular() {
    const display = document.querySelector('.display');
    try {
        display.value = eval(display.value); // ⚠️ para projetos reais seria melhor usar outra abordagem que não eval
    } catch {
        display.value = 'Erro';
    }
}