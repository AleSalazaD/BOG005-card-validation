//Se importa el objeto validator desde el archivo validator.js *Debe tener una contraparte que exporte en el otro archivo*
import validator from './validator.js';
console.log(validator);

function getData(){
    const name = document.getElementById('clientName').value; //Captura el nombre
    console.log(name);

    const card = document.getElementById('cardType').value; //Captura el tipo de tarjeta
    console.log(card);
// ***********
    let strNumber = document.getElementById('cardNumber').value;
     //Captura el #tarjeta en string
    strNumber = Array.from(strNumber); //Convierte la data en Array
    console.log(strNumber);
    
    let arrayNum = [];
    for(let i=0; i<strNumber.length; i++){
        let elemento = parseInt(strNumber[i])
        arrayNum.push(elemento)
    }
    arrayNum = arrayNum.reverse();
    console.log(arrayNum);//Aún Requiere el masking, requiere las operaciones para Luhn (en validator.js)
    
    console.log(validator.isValid);//Devuelve el resultado de funcion isValid (está mandando resultado undefined)

    const month = document.getElementById('month').value;
    console.log(month);

    const year = document.getElementById('year').value;
    console.log(year);

    const cvv = document.getElementById('cvv').value;
    console.log(cvv);
}

document.getElementById('btnSubmit').addEventListener("click",getData);
    
//export  {arrayNumber};
