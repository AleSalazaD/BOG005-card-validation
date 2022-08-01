//Se importa el objeto validator desde el archivo validator.js *Debe tener una contraparte que exporte en el otro archivo*
import validator from './validator.js';
console.log(validator);

function getData(){
//Captura de datos de la tarjeta: nombre, tipo de tarjeta.
    document.getElementById('nombre');
    const name = document.getElementById('clientName').value; //Captura el nombre
    console.log(name);
    document.getElementById('nombre').innerHTML = name;
    const card = document.getElementById('cardType').value; //Captura el tipo de tarjeta
    console.log(card);

 //****Captura de datos de la tarjeta: numeros.****
    let strNumber1 = document.getElementById('cardNumber').value;//Captura el #tarjeta en string
     
    let strNumber = Array.from(strNumber1); //Convierte la data en Array
    console.log(strNumber);
    
    let arrayNum = [];
    for(let i=0; i<strNumber.length; i++){
        let elemento = parseInt(strNumber[i])
        arrayNum.push(elemento)
    }
    console.log(arrayNum);

    // ISVALID FUNCTION CALLBACK:
    const validar = validator.isValid(arrayNum);//Devuelve el resultado de funcion isValid.
    if(validar === true){
        alert('Número de tarjeta válido')
    }
    else{alert('Número de tarjeta no válido');}

    //*** MASKIFY FUNCTION CALLBACK:
    const maskified = validator.maskify(strNumber1);//Devuelve el resultado de funcion maskify.
    maskified = validator.maskify(creditNum);

 //Captura de datos de la tarjeta: fecha de validez, y cvv.
    const month = document.getElementById('month').value;
    console.log(month);
    const year = document.getElementById('year').value;
    console.log(year);
    const cvv = document.getElementById('cvv').value;
    console.log(cvv);

}
document.getElementById('btnSubmit').addEventListener("click",getData);
