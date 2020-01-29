// sempre usar aspas simples
// operador de comparação sempre usar ===
var string = 'myString';
var number = 10000.92;
var booleans = true || false;
// boa prática, não usar new Array()
var array = [1, 2, 3, 4, 5, 'ssss', [true || false]];
console.log(array.length);
array.push(100);
console.log(array.length);

function dispararLaser() {
    console.log('BEAM');

    var tiro = Math.random();

    // verificar if ternário.

    if (tiro > 0.50) {
        console.log('acertou');
        return 'acertou';
    } else {
        console.log('errou');
        return 'errou';
    }

}

var acertouOuErrou = dispararLaser();

console.log(`${acertouOuErrou} - fora da função`);
console.log('acertouOuErroufora da função', acertouOuErrou);

var heroi = {
    nome: 'Tony Stark',
    alterEgo: 'Homem de Ferro',
    dispararLaser: dispararLaser
}

console.log(heroi.nome);
console.log(heroi.dispararLaser());
console.log(heroi.dispararLaser());

heroi.batata = 30;
heroi.funcao = function() {
    console.log('rir');
}

