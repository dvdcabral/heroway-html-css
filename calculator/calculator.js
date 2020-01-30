document.addEventListener('DOMContentLoaded', () => {
    const entrada = document.getElementById('input');
    const btnClear = document.getElementById('button-clear');
    const btnBackSpace = document.getElementById('button-backspace');
    const btnMultiplicacao = document.getElementById('button-multiplicacao');
    const btnDivisao = document.getElementById('button-divisao');
    const btnSubtracao = document.getElementById('button-subtracao');
    const btnSoma = document.getElementById('button-soma');
    const btnEqual = document.getElementById('button-equal');
    let numbers = [];
    let result = 0;
    let pointFLG, rFLG = 0;

    const clear = () => {
        entrada.value = '';
        numbers = [];
        result = 0;
        pointFLG = 0;
        rFLG = 0;
    }

    const backSpace = () => {
        let dado = entrada.value.substring(entrada.value.length - 1);
        if (rFLG === 1) {
            clear();
        } else if (dado === '.') {
            entrada.value = entrada.value.substring(entrada.value.length - 1, - entrada.value.length);
            pointFLG = 0;
        } else {
            entrada.value = entrada.value.substring(entrada.value.length - 1, - entrada.value.length);
        }
    }

    const efetuarOperacao = (operator) => {
        if (entrada.value !== '') {
            if (entrada.value !== '.') {
                numbers.push(Number(entrada.value));
                numbers.push(operator);
                entrada.value = '';
                pointFLG = 0;
                rFLG = 0;
            }
        }
    }

    const equal = () => {
        if (entrada.value !== '') {
            if (entrada.value !== '.') {
                numbers.push(Number(entrada.value));
                for (i = 0; i <= numbers.length; i++) {
                    let resultMult = 0;
                    if (numbers[i] === '*') {
                        if ((i - 1) === 0) {
                            resultMult = numbers[i - 1] * numbers[i + 1];
                        } else {
                            resultMult = result * numbers[i + 1];
                        }
                        result = resultMult;
                    } else if (numbers[i] === '/') {
                        if ((i - 1) === 0) {
                            resultMult = numbers[i - 1] / numbers[i + 1];
                        } else {
                            resultMult = result / numbers[i + 1];
                        }
                        result = resultMult;
                    } else if (numbers[i] === '+') {
                        if ((i - 1) === 0) {
                            resultMult = numbers[i - 1] + numbers[i + 1];
                        } else {
                            resultMult = result + numbers[i + 1];
                        }
                        result = resultMult;
                    } else if (numbers[i] === '-') {
                        if ((i - 1) === 0) {
                            resultMult = numbers[i - 1] - numbers[i + 1];
                        } else {
                            resultMult = result - numbers[i + 1];
                        }
                        result = resultMult;
                    }
                }
                entrada.value = result;
                numbers = [];
                rFLG = 1;
            }
        }
    }
    //recuperar botões
    document.querySelector(".container-calc").addEventListener("click", function (e) {
        if (e.target.value !== undefined && e.target.classList.contains('button')) {
            if (rFLG === 1 || entrada.value == '#ERRO') {
                clear();
            }

            if (e.target.innerText === '.') {
                if (pointFLG === 0) {
                    entrada.value = entrada.value + e.target.innerText;
                    pointFLG = 1;
                }
            } else if (e.target.innerText === '0' && numbers[numbers.length - 1] === '/') {
                entrada.value = '#ERRO';
            } else {
                entrada.value = entrada.value + e.target.innerText;
            }
        }
    });

    btnClear.addEventListener('click', clear);
    btnBackSpace.addEventListener('click', backSpace);

    // Operações:
    btnMultiplicacao.addEventListener('click', function (event) {
        efetuarOperacao('*');
    });

    btnDivisao.addEventListener('click', function (event) {
        efetuarOperacao('/');
    });

    btnSubtracao.addEventListener('click', function (event) {
        efetuarOperacao('-');
    });

    btnSoma.addEventListener('click', function (event) {
        efetuarOperacao('+');
    });

    btnEqual.addEventListener('click', equal);
});