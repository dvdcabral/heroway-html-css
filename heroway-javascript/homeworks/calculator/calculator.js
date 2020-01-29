document.addEventListener('DOMContentLoaded', () => {
    // btn-clear
    // btn-soma
    // btn-subtracao
    // btn-multiplicacao
    // btn-divisao
    const entrada1 = document.getElementById('entrada-1');
    const entrada2 = document.getElementById('entrada-2');
    const resultado = document.getElementById('resultado');
    const btnClear = document.getElementById('btn-clear');
    const btnSoma = document.getElementById('btn-soma');
    const btnSubtracao = document.getElementById('btn-subtracao');
    const btnMultiplicacao = document.getElementById('btn-multiplicacao');
    const btnDivisao = document.getElementById('btn-divisao');

    let a, b;

    console.log(entrada1);
    console.log(entrada2);
    console.log(resultado);
    console.log(btnClear);
    console.log(btnSoma);
    console.log(btnSubtracao);
    console.log(btnMultiplicacao);
    console.log(btnDivisao);

    const clear = () => {
        entrada1.value = '';
        entrada2.value = '';
        resultado.innerHTML = '';
    };

    const soma = () => {
        a = Number(entrada1.value);
        b = Number(entrada2.value);
        c = a + b;
        resultado.innerHTML = c;
    };

    const subtracao = () => {
        a = Number(entrada1.value);
        b = Number(entrada2.value);
        c = a - b;
        resultado.innerHTML = c;
    };

    const multiplicacao = () => {
        a = Number(entrada1.value);
        b = Number(entrada2.value);
        c = a * b;
        resultado.innerHTML = c;
    };

    const divisao = () => {
        a = Number(entrada1.value);
        b = Number(entrada2.value);
        if (b === 0) {
            alert('Não é permitido divisão por zero!')
        } else {
            c = a / b;
            resultado.innerHTML = c;
        }
    };

    btnClear.addEventListener('click', clear);
    btnSoma.addEventListener('click', soma);
    btnSubtracao.addEventListener('click', subtracao);
    btnMultiplicacao.addEventListener('click', multiplicacao);
    btnDivisao.addEventListener('click', divisao);
});