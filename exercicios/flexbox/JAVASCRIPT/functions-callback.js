function laser1() {
    console.log('beam');
}

// const laser2 = function batata(){
//     console.log('beam');
// }

const laser3 = () => {
    console.log('beam');
} // usar em callback ou this

//---------------------------------------------

function executador(fn1, fn2) {
    console.log('esecutador está executando')
    if(Math.random() > 0.50){
        fn1();
    } else {
        fn2();
    }
}
function pegarNumero10(){
    console.log(10);
    return 10;
}

function pegarNumero20(){
    console.log(20);
    return 20;
}
//debugger;
executador(pegarNumero10, pegarNumero20);

const numbers = [1,2,3,4,5,6,7,8,9];
// numbers.filter((number) => {
//     if (numbers >= 5){
//         return true;
//     } else {
//         return false;
//     }
// });

function filter(array, fn){
    
}

