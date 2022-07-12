import validator from './validator.js';

function pagar(){
    let clientName = document.getElementById("clientName").value;
    let credit = document.getElementById("credit").value;
    let cvv = document.getElementById("cvv").value;

    let boton = document.getElementById("purchaise");
    boton.addEventListener("click", pagar(), false);
    alert("Pago procesado");
}





console.log(validator);
