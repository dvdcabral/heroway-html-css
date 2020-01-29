document.addEventListener('DOMContentLoaded', () => {
    const regularFunctionBTN = document.getElementById('regularFunctionBTN');
    const arrowFunctionBTN = document.getElementById('arrowFunctionBTN');

    //console.log(regularFunctionBTN);
    //console.log(arrowFunctionBTN);

    regularFunctionBTN.addEventListener('click', regularFunction);
    arrowFunctionBTN.addEventListener('click', arrowFunction);

    function regularFunction() {
        alert('regularFunction');
    }

    function arrowFunction() {
        alert('arrowFunction');
    }

});