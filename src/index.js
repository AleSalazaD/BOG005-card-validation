//import validator from './validator.js';

function getData(){
    const name = document.getElementById('clientName').value;
    console.log(name);

    const card = document.getElementById('cardType').value;
    console.log(card);

    let number = document.getElementById('cardNumber').value;
    const arrayNumber = number.split("").reverse();
    console.log(arrayNumber);//Requiere el masking, yconvertir a array


    const date = document.getElementById('expiration').value;
    console.log(date);

    const cvv = document.getElementById('cvv').value;
    console.log(cvv);
}

const btn = document.getElementById('btnSubmit').addEventListener("click",getData);
    


//console.log(validator);
