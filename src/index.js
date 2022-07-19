//import validator from './validator.js';

function getData(){
    const name = document.getElementById('clientName').value;
    console.log(name);
}

const btn = document.getElementById('btnSubmit').addEventListener("click",getData);
    


//console.log(validator);
